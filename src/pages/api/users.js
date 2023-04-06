import { db } from "../../database/config";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default async function users(req, res) {
  // Get all users (only admin)
  if (req.method === "GET") {
    const apiKey = req.query.api_key;
    const expectedApiKey = "34njn2ie202r2fn";

    if (!apiKey || apiKey !== expectedApiKey) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "User not found" });
      console.log(error);
    }
  }
  // Create new user
  if (req.method === "POST") {
    const { username, email, userId } = req.body;
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username: username,
        email: email,
        userId: userId,
      });
      res
        .status(201)
        .send({ success: true, message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: "User could not be created" });
      console.log(error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
