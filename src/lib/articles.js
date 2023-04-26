import { db } from "../database/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

// This function retrieves the username of an author by searching for their user ID in the "users" collection of the database.
async function getAuthorName(authorId) {
  const userRef = query(
    collection(db, "users"),
    where("userId", "==", authorId)
  );
  const userSnapshot = await getDocs(userRef);
  return userSnapshot.docs[0].data().username;
}
// This function extracts specific data about an article, including the author's name, from a document object.
async function getArticleData(doc) {
  const authorId = doc.data().author_id;
  const authorName = await getAuthorName(authorId);
  const articleId = doc.id;
  return { ...doc.data(), articleId, authorName };
}
// This function retrieves all articles that match a given query and includes the relevant data about each article, such as the author's name and the article ID.
async function getArticles(queryData) {
  const querySnapshot = await getDocs(queryData);
  const articlesPromises = querySnapshot.docs.map(getArticleData);
  const articles = await Promise.all(articlesPromises);
  return articles;
}

// --

// Handle GET requests for the api/articles?id { Document ID } route.
export async function getArticleById(documentId) {
  try {
    const docRef = doc(db, "articles", documentId);
    const querySnapshot = await getDoc(docRef);
    const articleData = await getArticleData(querySnapshot);
    return articleData;
  } catch (error) {
    throw new Error("Article not found");
  }
}

// Handle GET requests for the api/articles?author_id { author ID } route. Using when fetching all articles from a user
export async function getArticlesByAuthorId(authorId) {
  try {
    const q = query(
      collection(db, "articles"),
      where("author_id", "==", authorId),
      orderBy("created_at", "asc")
    );
    return await getArticles(q);
  } catch (error) {
    console.log(error);
    throw new Error("Articles not found");
  }
}

// Handle GET requests for the api/articles route. Using if fetching all articles
export async function getAllArticles() {
  try {
    const q = collection(db, "articles");
    return await getArticles(q);
  } catch (error) {
    throw new Error("Articles not found");
  }
}

// Handle POST requests for the /articles route
export async function createArticle(article) {
  try {
    await addDoc(collection(db, "articles"), article);
    return true;
  } catch (error) {
    throw new Error("Article could not be created");
  }
}
// Handle UPDATE requests for the /articles route
export async function updateArticle(article, articleId) {
  try {
    await updateDoc(collection(db, "articles", articleId), article);
    return true;
  } catch (error) {
    throw new Error("Article could not be updated");
  }
}

// Handle DELETE requests for the /articles route
export async function deleteArticle(articleId) {
  try {
    await deleteDoc(doc(db, "articles", articleId));
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Article could not be deleted");
  }
}
