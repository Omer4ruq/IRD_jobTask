import { connectToDB } from "@/utils/db";

export default async function handler(req, res) {
  const { subcategoryId } = req.query;
  const db = await connectToDB();
  const duas = await db.all("SELECT * FROM duas WHERE subcategory_id = ?", [
    subcategoryId,
  ]);
  res.status(200).json(duas);
}
