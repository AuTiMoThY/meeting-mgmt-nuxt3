<script setup>
const handleLogin = async () => {
    if (username.value === "admin" && password.value === "password") {
        await authStore.login(); // 更新登入狀態
        router.push("/"); // 登入成功後導向dashboard
    } else {
        alert("登入失敗，請檢查您的使用者名稱或密碼");
    }
};
</script>
<template>
    <main class="page_main page-login">
        <div class="hero">
            <h1 class="title">管理系統</h1>
        </div>
        <div class="login_wrap">
            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <label for="username">使用者名稱</label>
                    <input id="username" v-model="username" type="text" required />
                </div>
                <div class="input-group">
                    <label for="password">密碼</label>
                    <input id="password" v-model="password" type="password" required />
                </div>
                <button type="submit">登入</button>
            </form>
        </div>
    </main>
</template>
