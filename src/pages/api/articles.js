import { db } from "../../database/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export default async function articles(req, res) {
  if (req.method === "GET") {
    try {
      if (req.query.q) {
        // Search by title
        const searchQuery = query(
          collection(db, "articles"),
          where("title", "==", req.query.q)
        );
        const querySnapshot = await getDocs(searchQuery);
        const articlesByName = [];
        querySnapshot.forEach((doc) => {
          articlesByName.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
        res.status(200).json(articlesByName);
      } else {
        // Get all articles
        const querySnapshot = await getDocs(collection(db, "articles"));
        const articles = [];
        querySnapshot.forEach((doc) => {
          articles.push(doc.data());
        });
        res.status(200).json(articles);
      }
    } catch (error) {
      res.status(500).json({ error: "Article not found" });
      console.log(error);
    }
  }
  //   Create new article
  if (req.method === "POST") {
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
        .send({ success: true, message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Article could not be created" });
      console.log(error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
