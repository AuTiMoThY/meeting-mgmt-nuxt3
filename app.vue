<script setup>
const config = useRuntimeConfig();
const basePath = config.public.basePath;

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Meeting Management` : "Meeting Management";
    },
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
        {
            charset: "utf-8"
        }
    ],
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
