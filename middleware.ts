import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken");

  // Redirect authenticated users away from the login page
  if (req.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Protect routes under `/admin/:path*`
  if (req.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Protect routes under `/admin/:path*`
export const config = {
  matcher: ["/login", "/admin/:path*"],
};
