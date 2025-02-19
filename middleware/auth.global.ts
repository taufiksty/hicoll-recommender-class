export default defineNuxtRouteMiddleware((to) => {
  const tokenCookie = useCookie("token");
  const token = tokenCookie.value;

  if (!token && to.path !== "/") {
    return navigateTo("/");
  }

  if (token && (to.path === "/" || to.path === "/register")) {
    return navigateTo("/program/publicTraining");
  }
});
