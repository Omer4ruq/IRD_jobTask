import { connectToDB } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = await connectToDB();
    const categories = await db.all("SELECT * FROM category");
    res.status(200).json(categories);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
