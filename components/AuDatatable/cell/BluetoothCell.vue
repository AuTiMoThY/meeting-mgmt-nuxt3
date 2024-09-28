<script setup>
defineProps({
    row: Object,
    col: Object
});

// console.log(row, col);
</script>
<template>
    <span class="txt" :class="{ 'txt-red': row[col.name] == 0 }">
        {{ row[col.name] == 0 ? "OFF" : "ON" }}
    </span>
</template>
