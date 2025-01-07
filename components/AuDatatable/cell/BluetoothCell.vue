<script setup>
import BluetoothTxt from "./BluetoothTxt.vue";
defineProps({
    row: Object,
    col: Object
});
</script>
<template>
    <BluetoothTxt :txt="row[col.name]"></BluetoothTxt>
</template>
