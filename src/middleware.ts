import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionId = request.cookies.get("sessionId"); // Or however you are storing the token

  if (!sessionId) {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/login"
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/home/:path*"],
};
