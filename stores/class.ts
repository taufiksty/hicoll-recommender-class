import { defineStore } from "pinia";
import type { Class } from "~/types/class";

interface ClassResponse {
  classes: Class[];
}

interface RecommendationClassResponse {
  recommendations: Class[];
}

export const useClassStore = defineStore("class", {
  state: () => ({
    data: {
      recommendationClasses: [] as Class[],
      classes: [] as Class[],
    },
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchClasses(categoryId: number = 1, token: string) {
      this.loading = true;
      this.error = null;

      try {
        const { data: responseData } = await useFetch<ClassResponse>(
          `http://localhost:8080/api/class?category_id=${categoryId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: "GET",
          }
        );

        this.data.classes = responseData.value?.classes as Class[];
      } catch (err) {
        this.error = err instanceof Error ? err.message : "An error occurred";
      } finally {
        this.loading = false;
      }
    },

    async fetchRecommendationClasses(userId: number, token: string) {
      this.loading = true;
      this.error = null;

      try {
        const { data: responseData } =
          await useFetch<RecommendationClassResponse>(
            `http://localhost:8080/api/class/recommendation?user_id=${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              method: "GET",
            }
          );

        this.data.recommendationClasses =
          responseData.value?.recommendations.slice(0, 3) as Class[];
      } catch (err) {
        this.error = err instanceof Error ? err.message : "An error occured";
      } finally {
        this.loading = false;
      }
    },
  },
});
