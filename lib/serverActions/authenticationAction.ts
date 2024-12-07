"use server";

import { cookies } from "next/headers";

export const AdminLogin = async (data: FormData): Promise<any> => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  if (!email || !password) {
    throw new Error("Both fields are required");
  }

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASS
  ) {
    const cookieStore = await cookies();
    const oneDayInSeconds = 60 * 60 * 24;

    cookieStore.set("authToken", email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: oneDayInSeconds,
    });
    console.log("Logged in successfully");
    return { success: true, message: "Logged in successfully" };
  } else {
    throw new Error("Invalid email or password");
  }
};
