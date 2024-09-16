<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import PasswordField from "~/components/FrmField/PasswordField.vue";
// import { useAuthStore } from "~/stores/useAuthStore";
const authStore = useAuthStore();
const router = useRouter();

definePageMeta({
    layout: "simple"
});

const userId = ref("");
const userPw = ref("");
const handleLogin = async () => {
    if (userId.value === "qq" && userPw.value === "aa") {
        await authStore.login(); // 更新登入狀態
        router.push("/"); // 登入成功後導向dashboard
    } else {
        alert("登入失敗，請檢查您的使用者名稱或密碼");
    }
};

const handleLoginClicked = () => {
    handleLogin();
};
</script>
<template>
    <main class="page_main page-login">
        <div class="brand">
            <h1 class="title">會議管理系統</h1>
        </div>
        <div class="login_wrap">
            <div class="login_block">
                <form class="frm-wrap" @submit.prevent="handleLogin">
                    <div class="frm-row">
                        <InputField
                            id="user_id"
                            v-model="userId"
                            class="frm_field-v"
                            label="Email"
                            placeholder="請輸入Email"></InputField>
                    </div>
                    <div class="frm-row">
                        <PasswordField
                            id="user_pw"
                            v-model="userPw"
                            class="frm_field-v"
                            label="密碼"
                            placeholder="請輸入密碼"></PasswordField>
                    </div>
                    <div class="frm-row frm-row-btn">
                        <AuBtn
                            class="au_btn-effecy"
                            txt="登入"
                            type="button"
                            @click="handleLoginClicked"></AuBtn>
                    </div>
                </form>
            </div>
            <!-- <AuImg class="test" w="100" h="50" default-src="/images/logo.png"></AuImg> -->
        </div>
    </main>
</template>
<style lang="scss">
@import "./index.scss";
</style>
