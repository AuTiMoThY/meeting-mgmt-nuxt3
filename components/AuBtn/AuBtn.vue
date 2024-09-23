<script setup>
defineProps({
    txt: [String, Number]
});

const slots = useSlots();
</script>
<template>
    <div class="au_btn">
        <div class="au_btn-inner">
            <div v-if="slots['bg']" class="au_btn-bg">
                <slot name="bg"></slot>
            </div>
            <div v-if="slots['icon-prepend']" class="au_btn-icon icon-prepend">
                <slot name="icon-prepend"></slot>
            </div>
            <div class="au_btn-center">
                <div v-if="slots['icon-top']" class="au_btn-icon icon-top">
                    <slot name="icon-top"></slot>
                </div>
                <div v-if="txt" class="au_btn-txt">{{ txt }}</div>
            </div>
            <div v-if="slots['icon-append']" class="au_btn-icon icon-append">
                <slot name="icon-append"></slot>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
// 元件style由 main.scss 載入
</style>
