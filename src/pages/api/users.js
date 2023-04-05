import { db } from "../../database/config";
import { collection, getDocs } from "firebase/firestore";

export default async function users(req, res) {
  const apiKey = req.query.key;
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
