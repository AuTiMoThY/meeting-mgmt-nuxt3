<script setup>
defineProps({
    w: String,
    h: String
});
</script>

<template>
    <span class="au_spcing" :style="'--w: ' + w + '; --h: ' + h"></span>
</template>

<style lang="scss">
// 元件style由 main.scss 載入
</style>
