"use server";

import { cookies } from "next/headers";

interface LoginResponse {
  success: boolean;
  message: string;
}

interface LoginError {
  success: false;
  message: string;
}

export type LoginResult = LoginResponse | LoginError;

export const AdminLogin = async (data: FormData): Promise<LoginResult> => {
  try {
    const email = data.get("email") as string | null;
    const password = data.get("password") as string | null;

    if (!email || !password) {
      return { success: false, message: "Both fields are required" };
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

      return { success: true, message: "Logged in successfully" };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  } catch (error: unknown) {
    return { success: false, message: "An error occurred during login" };
  }
};
