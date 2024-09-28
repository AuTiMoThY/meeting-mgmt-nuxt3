<script setup>
// import { useMenuStore } from "~/stores/useMenuStore";
const menuStore = useMenuStore();
</script>
<template>
    <div class="body_wrapper">
        <!-- <SiteHeader></SiteHeader> -->
        <SiteAside :is-open="menuStore.isOpen"></SiteAside>
        <NuxtPage />
    </div>
</template>
