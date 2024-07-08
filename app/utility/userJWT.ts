"use server";

import { cookies } from "next/headers";

const jwt = require("jsonwebtoken");
export const createToken = (user: any) => {
  const secret = "lskdjflskdjfwoeiu979d9f7g987";
  try {
    const token = jwt.sign(user, secret, {
      expiresIn: "1000d",
    });
    console.log(token);
    cookies().set("access_token", token);
    return token;
  } catch (err) {
    throw err;
  }
};
