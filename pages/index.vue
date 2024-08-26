<script setup>
definePageMeta({
    middleware: "auth"
});
onMounted(() => {});

onUnmounted(() => {});
</script>
<template>
    <main class="page_main page-home">
        <div class="container">
            <AuPanel>
                <template #hd>今日會議</template>
                <template #bd> </template>
            </AuPanel>
        </div>
    </main>
</template>
<style lang="scss"></style>
