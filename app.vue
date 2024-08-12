<script setup>
const config = useRuntimeConfig();
const basePath = config.public.basePath;

useHead({
    script: [
        {
            src: `${basePath}assets/js/TwTempCore.js`,
            body: true
        }
    ]
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
