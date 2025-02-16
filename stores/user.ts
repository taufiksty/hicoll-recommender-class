import { defineStore } from "pinia";
import type { User } from "~/types/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    data: {
      user: null as User | null,
      token: null as string | null,
    },
    loading: false,
    error: null as string | null,
  }),
});
