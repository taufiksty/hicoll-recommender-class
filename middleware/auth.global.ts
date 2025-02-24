import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  authStore.loadAuthState();

  if (!authStore.data.token && to.path !== "/register" && to.path !== "/") {
    return navigateTo("/");
  }

  if (authStore.data.token && (to.path === "/" || to.path === "/register")) {
    return navigateTo("/program/publicTraining");
  }
});
