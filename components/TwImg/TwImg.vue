<script setup>
defineProps({
    defaultSrc: String,
    hoverSrc: String,
    w: String,
    h: String
});
</script>

<template>
    <div class="tw_img" :style="{ '--w': w, '--h': h }">
        <img v-if="hoverSrc" :src="hoverSrc" alt="" class="hover" loading="lazy" />
        <img :src="defaultSrc" alt="" class="default" loading="lazy" />
    </div>
</template>

<style lang="scss">
@import "./TwImg.scss";
</style>
