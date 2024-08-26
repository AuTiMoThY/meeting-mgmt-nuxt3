<script setup>
const slots = useSlots();
</script>
<template>
    <div class="au_panel">
        <div v-if="slots.hd" class="au_panel-hd">
            <slot name="hd"></slot>
        </div>
        <div v-if="slots.bd" class="au_panel-bd">
            <slot name="bd"></slot>
        </div>
        <div v-if="slots.ft" class="au_panel-ft">
            <slot name="ft"></slot>
        </div>
    </div>
</template>
