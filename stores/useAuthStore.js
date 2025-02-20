// import { defineStore, ref, computed } from 'pinia';

// export const useAuthStore = defineStore("auth", () => {
//     const isLoggedIn = ref(false);

//     // 修改初始化方法
//     const initializeAuth = () => {
//         // 只在客戶端執行，並確保 window 已定義
//         if (process.client && window?.localStorage) {
//             const storedAuth = localStorage.getItem("isLoggedIn");
//             isLoggedIn.value = storedAuth === "true";
//         }
//     };

//     const login = () => {
//         isLoggedIn.value = true;
//         if (process.client && window?.localStorage) {
//             localStorage.setItem("isLoggedIn", "true");
//         }
//     };

//     const logout = () => {
//         isLoggedIn.value = false;
//         if (process.client && window?.localStorage) {
//             localStorage.removeItem("isLoggedIn");
//         }
//     };

//     return { isLoggedIn, login, logout, initializeAuth };
// });

export const useAuthStore = defineStore("auth", () => {
    // state
    const authenticated = ref(false);
    const loading = ref(false);

    // actions
    async function authenticateUser({ userid, password }) {
        console.log(userid, password);

        // 檢查必填欄位
        if (!userid || !password) {
            throw new Error("請輸入帳號和密碼");
        }

        // 模擬 API 延遲
        loading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (userid !== "demo" || password !== "demo") {
            throw new Error("帳號或密碼錯誤");
        }

        // 模擬成功登入
        const mockData = {
            token: "mock_token_" + Date.now(),
            user: {
                id: 1,
                username: userid
                // 可以加入其他需要的使用者資料
            }
        };

        loading.value = false;
        const token = useCookie("token");
        const userData = useCookie("userData");
        token.value = mockData.token;
        userData.value = mockData.user;
        authenticated.value = true;

        return mockData;

        // const { data, pending } = await $fetch("https://dummyjson.com/auth/login", {
        //     method: "post",
        //     headers: { "Content-Type": "application/json" },
        //     body: {
        //         userid,
        //         password
        //     }
        // });
        // loading.value = pending;

        // if (data.value) {
        //     const token = useCookie("token");
        //     token.value = data?.value?.token;
        //     authenticated.value = true;
        // }
    }

    function logOut() {
        const token = useCookie("token");
        authenticated.value = false;
        token.value = null;
    }

    return {
        // state
        authenticated,
        loading,
        // actions
        authenticateUser,
        logOut
    };
});
