"use server";

import { cookies } from "next/headers";

const jwt = require("jsonwebtoken");

export const jwtUserData = async () => {
  const token = cookies().get("access_token")?.value;
  const userToken = await jwt.verify(token, "lskdjflskdjfwoeiu979d9f7g987");
  return userToken;
};
