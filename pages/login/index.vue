<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import PasswordField from "~/components/FrmField/PasswordField.vue";
// import { useAuthStore } from "~/stores/useAuthStore";
// const authStore = useAuthStore();

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const router = useRouter();
definePageMeta({
    // middleware: "auth",
    layout: "simple"
});

const userId = ref("");
const userPw = ref("");
const handleLogin = async () => {
    try {
        // if (!userId.value || !userPw.value) {
        //     alert("請輸入帳號和密碼");
        //     return;
        // }

        await authenticateUser({
            userid: userId.value,
            password: userPw.value
        });

        // redirect to homepage if user is authenticated
        if (authenticated) {
            router.push("/");
        }
    } catch (error) {
        alert(error.message);
    }
};

onMounted(() => {
    // if (process.client) {
    //     authStore.initializeAuth();
    // }
});
</script>
<template>
    <main class="page_main page-login">
        <div class="brand">
            <h1 class="title">會議管理系統</h1>
        </div>
        <div class="login_wrap">
            <div class="login_block">
                <form class="frm-wrap">
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
                            @click="handleLogin"></AuBtn>
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
