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

interface InputUpdate {
  interests: string[];
}

interface AuthResponse {
  user: User;
  token: string;
}

interface UpdateResponse {
  user: User;
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
    loadAuthState() {
      const tokenCookie = useCookie("token");
      const userCookie = useCookie("user");
      if (tokenCookie.value && userCookie.value) {
        this.data.token = tokenCookie.value;
        this.data.user = toRaw(userCookie.value) as any;
      }
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

        const tokenCookie = useCookie("token");
        const userCookie = useCookie("user");

        tokenCookie.value = this.data.token;
        userCookie.value = JSON.stringify(this.data.user);
      } catch (err) {
        this.error = err instanceof Error ? err.message : "An error occurred";
      } finally {
        this.loading = false;
      }
    },

    async update(userData: InputUpdate) {
      this.loading = true;
      this.error = null;

      try {
        const { data: responseData } = await useFetch<UpdateResponse>(
          "http://localhost:8080/api/user",
          {
            headers: {
              Authorization: `Bearer ${this.data.token}`,
            },
            method: "PUT",
            body: userData,
          }
        );

        this.data.user = responseData.value?.user as User;

        const userCookie = useCookie("user");
        userCookie.value = JSON.stringify(this.data.user);
      } catch (err) {
        this.error = err instanceof Error ? err.message : "An error occurred";
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.data.user = null;
      this.data.token = null;

      const tokenCookie = useCookie("token");
      const userCookie = useCookie("user");

      tokenCookie.value = null;
      userCookie.value = null;
    },
  },
});
