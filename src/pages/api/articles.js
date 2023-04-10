import {
  getAllArticles,
  getArticleById,
  getArticlesByAuthorId,
  createArticle,
  deleteArticle,
} from "../../lib/articles";

export default async function articles(req, res) {
  if (req.method === "GET") {
    try {
      if (req.query.id) {
        const article = await getArticleById(req.query.id);
        res.status(200).json(article);
      } else if (req.query.author_id) {
        const articles = await getArticlesByAuthorId(req.query.author_id);
        res.status(200).json(articles);
      } else {
        const articles = await getAllArticles();
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

    const article = {
      title,
      genre,
      description,
      readingTime,
      body,
      author_id,
      views,
      published,
      created_at,
    };

    try {
      const result = await createArticle(article);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Article could not be created" });
      console.log(error);
    }
  } else if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
    try {
      if (req.query.article_id) {
        const result = await deleteArticle(req.query.article_id);
        res.status(200).json({ success: true });
      }
    } catch (error) {
      res.status(500).json({ error: "Article could not be deleted" });
      console.log(error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
