import { db } from "../../database/config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default async function articles(req, res) {
  if (req.method === "GET") {
    try {
      if (req.query.id) {
        // Search by id
        const articleIdQ = req.query.id;
        const querySnapshot = await getDoc(doc(db, "articles", articleIdQ));
        const authorId = querySnapshot.data().author_id;
        const articleId = querySnapshot.id;
        const userRef = query(
          collection(db, "users"),
          where("userId", "==", authorId)
        );
        const userSnapshot = await getDocs(userRef);
        const authorName = userSnapshot.docs[0].data().username;
        const article = { ...querySnapshot.data(), articleId, authorName };
        res.status(200).json(article);
      } else if (req.query.author_id) {
        const authorId = req.query.author_id;
        const getAllArticleUserQuery = query(
          collection(db, "articles"),
          where("author_id", "==", authorId)
        );
        const querySnapshot = await getDocs(getAllArticleUserQuery);
        let articles = [];
        const articlesPromises = querySnapshot.docs.map(async (doc) => {
          const authorId = doc.data().author_id;
          const articleId = doc.id;
          const userRef = query(
            collection(db, "users"),
            where("userId", "==", authorId)
          );
          const userSnapshot = await getDocs(userRef);
          const authorName = userSnapshot.docs[0].data().username;
          const article = { ...doc.data(), articleId, authorName };
          return article;
        });
        articles = await Promise.all(articlesPromises);
        res.status(200).json(articles);
      } else {
        // Get all articles
        const querySnapshot = await getDocs(collection(db, "articles"));
        let articles = [];

        const articlesPromises = querySnapshot.docs.map(async (doc) => {
          const authorId = doc.data().author_id;
          const articleId = doc.id;
          const userRef = query(
            collection(db, "users"),
            where("userId", "==", authorId)
          );
          const userSnapshot = await getDocs(userRef);
          const authorName = userSnapshot.docs[0].data().username;
          const article = { ...doc.data(), articleId, authorName };
          return article;
        });

        articles = await Promise.all(articlesPromises);
        res.status(200).json(articles);
      }
    } catch (error) {
      res.status(500).json({ error: "Article not found" });
      console.log(error);
    }
  } else if (req.method === "POST") {
    const {
      title,
      genre,
      description,
      readingTime,
      body,
      author_id,
      views,
      published,
      created_at,
    } = req.body;
    try {
      const docRef = await addDoc(collection(db, "articles"), {
        title: title,
        genre: genre,
        description: description,
        readingTime: readingTime,
        body: body,
        author_id: author_id,
        views: views,
        published: published,
        created_at: created_at,
      });
      res
        .status(201)
        .send({ success: true, message: "Article created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Article could not be created" });
      console.log(error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
