export default defineNuxtRouteMiddleware((to) => {
  const tokenCookie = useCookie("token");
  const token = tokenCookie.value;

  if (!token && !/^\/(register)?$/.test(to.path)) {
    return navigateTo("/");
  }

  if (token && (to.path === "/" || to.path === "/register")) {
    return navigateTo("/program/publicTraining");
  }
});
