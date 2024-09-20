<script setup>
const config = useRuntimeConfig();
const imgPath = config.public.imgPath;
const props = defineProps({
    totalPage: {
        type: Number,
        required: true
    }
});
const { totalPage } = toRefs(props);
</script>
<template>
    <div class="au_pagination">
        <AuBtn class="au_pagination-ctrl au_pagination-prev">
            <template #icon-top>
                <AuImg :default-src="`${imgPath}icons/arrow.svg`"></AuImg>
            </template>
        </AuBtn>
        <div class="au_pagination-pages">
            <AuBtn
                v-for="i in totalPage"
                :key="i"
                :txt="i"
                class="au_pagination-ctrl au_pagination-number">
            </AuBtn>
        </div>
        <AuBtn class="au_pagination-ctrl au_pagination-next">
            <template #icon-top>
                <AuImg :default-src="`${imgPath}icons/arrow.svg`"></AuImg>
            </template>
        </AuBtn>
    </div>
</template>
