<script setup>
import WifiTxt from "./WifiTxt.vue";
defineProps({
    row: Object,
    col: Object
});

// console.log(row, col);
</script>
<template>
    <WifiTxt :txt="row[col.name]"></WifiTxt>
</template>
