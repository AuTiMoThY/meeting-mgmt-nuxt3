<script setup>
defineProps({
    defaultSrc: String,
    hoverSrc: String,
    w: String,
    h: String
});
</script>

<template>
    <div class="au_img" :style="{ '--w': w, '--h': h }">
        <img v-if="hoverSrc" :src="hoverSrc" alt="" class="hover" loading="lazy" />
        <img :src="defaultSrc" alt="" class="default" loading="lazy" />
    </div>
</template>

<style lang="scss">
// 元件style由 main.scss 載入
</style>
