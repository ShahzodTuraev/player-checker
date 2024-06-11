import type { NextApiRequest, NextApiResponse } from "next";
export default function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log("server");
  res.status(200).json({ message: "Hello from Next.js!" });
}
