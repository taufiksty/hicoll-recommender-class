import { defineStore } from "pinia";
import type { User } from "~/types/user";

interface InputRegister {
  fullname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface InputLogin {
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    data: {
      user: null as User | null,
      token: null as string | null,
    },
    loading: false,
    error: null as string | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.data.token,
  },

  actions: {
    loadAuthData() {
      const userCookie = useCookie("user");
      const tokenCookie = useCookie("token");

      this.data.user = (userCookie.value as any) || null;
      console.log(this.data.user);
      this.data.token = tokenCookie.value || null;
    },

    async register(userData: InputRegister) {
      this.loading = true;
      this.error = null;

      try {
        if (userData.password !== userData.passwordConfirmation) {
          this.error = "Passwords do not match";
          return;
        }

        await useFetch("http://localhost:8080/api/user/register", {
          method: "POST",
          body: userData,
        });
      } catch (err) {
        this.error = err instanceof Error ? err.message : "An error occurred";
      } finally {
        this.loading = false;
      }
    },

    async login(userData: InputLogin) {
      this.loading = true;
      this.error = null;

      try {
        const { data: responseData } = await useFetch<AuthResponse>(
          "http://localhost:8080/api/user/login",
          {
            method: "POST",
            body: userData,
          }
        );

        this.data.user = responseData.value?.user as User;
        this.data.token = responseData.value?.token as string;

        const userCookie = useCookie("user", { path: "/", maxAge: 3600 });
        const tokenCookie = useCookie("token", { path: "/", maxAge: 3600 });

        userCookie.value = JSON.stringify(this.data.user);
        tokenCookie.value = this.data.token;
      } catch (err) {
        this.error = err instanceof Error ? err.message : "An error occurred";
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.data.user = null;
      this.data.token = null;

      const userCookie = useCookie("user", { path: "/" });
      const tokenCookie = useCookie("token", { path: "/" });

      userCookie.value = null;
      tokenCookie.value = null;
    },
  },
});
