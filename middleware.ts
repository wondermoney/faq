import { type NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export default function middleware(req: NextRequest) {
  const locale = req.headers.get("accept-language")?.split(",")?.[0] || "en-US";

  const actualLocale = locale.includes("pt") ? "pt" : "en";

  // Rewrite the path (`/`) to the localized page (pages/[locale]/[country])
  req.nextUrl.pathname = `/${actualLocale}`;
  return NextResponse.rewrite(req.nextUrl);
}
