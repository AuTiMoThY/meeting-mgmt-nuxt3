// import { useAuthStore } from "~/stores/useAuthStore";
export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    authStore.initializeAuth();
    if (!authStore.isLoggedIn && to.name !== "login") {
        return navigateTo("/login");
    }

    if (authStore.isLoggedIn && to.name === "login") {
        return navigateTo("/");
    }

    console.log(to);
    console.log(from);
});
