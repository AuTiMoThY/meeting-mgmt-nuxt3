<script setup>
import PowerTxt from "./PowerTxt.vue";
defineProps({
    row: Object,
    col: Object
});
</script>
<template>
    <PowerTxt :txt="row[col.name]"></PowerTxt>
</template>
