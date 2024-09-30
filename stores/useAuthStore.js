// import { defineStore, ref, computed } from 'pinia';

export const useAuthStore = defineStore("auth", () => {
    const isLoggedIn = ref(false);

    // 初始化時檢查 localStorage
    const initializeAuth = () => {
        if (process.client) {
            const storedAuth = window.localStorage.getItem("isLoggedIn");
            isLoggedIn.value = storedAuth === "true";
            console.log("initializeAuth", isLoggedIn.value);
        }
    };

    // 登入時設置 localStorage
    const login = () => {
        isLoggedIn.value = true;
        if (process.client) {
            window.localStorage.setItem("isLoggedIn", "true");
        }
    };

    // 登出時清除 localStorage
    const logout = () => {
        isLoggedIn.value = false;
        if (process.client) {
            window.localStorage.removeItem("isLoggedIn");
        }
    };

    // 返回一個 getter 函數來檢查登入狀態
    // const checkIsLoggedIn = computed(() => isLoggedIn.value);

    return { isLoggedIn, login, logout, initializeAuth };
});
