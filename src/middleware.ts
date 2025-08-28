import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/editor(.*)",
  "/dashboard(.*)",
  "/api/ai/(.*)", // our server-only proxy to FastAPI
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      return Response.redirect("/sign-in");
    }
  }
});

export const config = {
  matcher: [
    // Skip static files and _next
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
