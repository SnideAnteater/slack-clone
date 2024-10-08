import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isSignInPage = createRouteMatcher(["/login"]);

export default convexAuthNextjsMiddleware((request) => {
  if (!isSignInPage(request) && !isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/login");
  }
  if (isSignInPage(request) && isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/");
  }
  // if (isProtectedRoute(request) && !isAuthenticatedNextjs()) {
  //   return nextjsMiddlewareRedirect(request, "/signin");
  // }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
