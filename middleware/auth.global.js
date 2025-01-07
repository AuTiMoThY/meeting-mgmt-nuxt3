// import { useAuthStore } from "~/stores/useAuthStore";
export default defineNuxtRouteMiddleware((to, from) => {
    console.log("From auth middleware");
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie("token"); // get token from cookies
    // const userData = useCookie("userData");

    if (token.value) {
        // check if value exists
        // todo verify if token is valid, before updating the state
        authenticated.value = true; // update the state to authenticated
    }

    // if token exists and url is /login redirect to homepage
    if (token.value && to?.name === "login") {
        return navigateTo("/");
    }

    // if token doesn't exist redirect to log in
    if (!token.value && to?.name !== "login") {
        // abortNavigation();
        return navigateTo("/login");
    }
    // const authStore = useAuthStore();

    // // 只在客戶端執行初始化
    // if (process.client) {
    //     authStore.initializeAuth();
    // }

    // if (!authStore.isLoggedIn && to.name !== "login") {
    //     return navigateTo("/login");
    // }

    // if (authStore.isLoggedIn && to.name === "login") {
    //     return navigateTo("/");
    // }
});
