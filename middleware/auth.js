import { useAuthStore } from "~/store/useAuthStore";
export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    if (!authStore.isLoggedIn && to.name !== "login") {
        return navigateTo("/login");
    }

    if (authStore.isLoggedIn && to.name === "login") {
        return navigateTo("/dashboard");
    }
});
