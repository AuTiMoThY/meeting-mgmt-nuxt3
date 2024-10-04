<script setup>
defineEmits(["close"]);
</script>

<template>
    <div class="au_popup">
        <div class="au_popup-mask"></div>
        <div class="au_popup-wrapper">
            <div class="au_popup-close">
                <AuBtn @click="$emit('close')">
                    <template #bg>
                        <AuImg :default-src="`${imgPath}icons/close.svg`"></AuImg>
                    </template>
                </AuBtn>
            </div>
            <div class="au_popup-container">
                <div class="au_popup-hd">
                    <slot name="hd"></slot>
                </div>
                <div class="au_popup-bd">
                    <slot name="bd"></slot>
                </div>
                <div class="au_popup-ft">
                    <slot name="ft"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
