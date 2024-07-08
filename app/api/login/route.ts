import { createToken } from "@/app/utility/userJWT";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  try {
    console.log("POST router/login");
    const body = await req.json();
    await createToken(body);
    return NextResponse.json({ status: 200, body });
  } catch (err) {
    return NextResponse.json({ status: 500, message: err });
  }
}
