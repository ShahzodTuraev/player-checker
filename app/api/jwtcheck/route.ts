import { jwtUserData } from "@/app/utility/userInfoJWT";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  try {
    const userData = await jwtUserData();
    return NextResponse.json({
      status: 200,
      userData,
    });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      message: `${err}`,
    });
  }
}
