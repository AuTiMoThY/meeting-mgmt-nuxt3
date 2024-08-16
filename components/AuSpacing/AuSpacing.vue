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
.au_spcing {
    display: block;
    width: 100%;
    aspect-ratio: var(--w) / var(--h);
}
</style>
