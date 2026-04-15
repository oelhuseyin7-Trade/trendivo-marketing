export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      console.log("Application received:", data);

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Failed to submit" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
