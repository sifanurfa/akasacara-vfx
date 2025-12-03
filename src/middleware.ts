import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname !== "/") return NextResponse.next();

  const hostname = req.headers.get("host") || "";

  if (hostname.includes("vfx.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/vfx";
    return NextResponse.rewrite(url);
  }
  if (hostname.includes("interactive.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/interactive";
    return NextResponse.rewrite(url);
  }
  if (hostname.includes("film.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/main";
    return NextResponse.rewrite(url);
  }
  if (hostname.includes("profile.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/akasacara";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
