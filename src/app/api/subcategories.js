import { connectToDB } from "@/utils/db";

export default async function handler(req, res) {
  const { categoryId } = req.query;
  const db = await connectToDB();
  const subcategories = await db.all(
    "SELECT * FROM subcategories WHERE category_id = ?",
    [categoryId]
  );
  res.status(200).json(subcategories);
}
