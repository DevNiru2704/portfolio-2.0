import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Handle legacy hash-based URLs by redirecting to clean URLs
  const url = request.nextUrl.clone();

  // If someone visits /#about, redirect to /about
  if (url.hash) {
    const hash = url.hash.replace("#", "");
    const validSections = [
      "about",
      "experience",
      "projects",
      "research",
      "contact",
    ];

    if (validSections.includes(hash)) {
      url.pathname = `/${hash}`;
      url.hash = "";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
