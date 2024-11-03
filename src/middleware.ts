import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));

  // // If the user doesn't have a token
  // if (!token) {
  //   // Allow access to the login page
  //   if (request.nextUrl.pathname === "/login") {
  //     return NextResponse.next();
  //   }
  //   // Redirect to login page if trying to access any other path
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // // If the user has a token
  // if (token) {
  //   // Redirect '/' and '/login' to '/home'
  //   if (
  //     request.nextUrl.pathname === "/" ||
  //     request.nextUrl.pathname === "/login"
  //   ) {
  //     if (refreshToken?.value == "")
  //       return NextResponse.redirect(new URL("/profile", request.url));

  //     return NextResponse.redirect(new URL("/home", request.url));
  //   }
  //   // Continue to the requested page for all other paths
  //   return NextResponse.next();
  // }
}

// Apply middleware to all paths
export const config = {
  matcher: ["/"],
};
