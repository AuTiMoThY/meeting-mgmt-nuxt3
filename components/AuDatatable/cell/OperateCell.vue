<script setup>
const config = useRuntimeConfig();
const imgPath = config.public.imgPath;
</script>
<template>
    <AuImg class="icon-operate" :default-src="`${imgPath}icons/more.svg`"></AuImg>
</template>
