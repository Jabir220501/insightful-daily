import { apiKey, getUserById, createUser } from "../../lib/users";

export default async function users(req, res) {
  const apiKey = req.query.api_key;
  const expectedApiKey = "34njn2ie202r2fn";

  if (!apiKey || apiKey !== expectedApiKey) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (req.method === "GET") {
    const users = await getUserById(req.query.id);
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const { username, email, userId } = req.body;

    const user = { username, email, userId };

    try {
      const result = await createUser(user);
      res
        .status(200)
        .send({ success: true, message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: "User could not be created" });
      console.log(error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
