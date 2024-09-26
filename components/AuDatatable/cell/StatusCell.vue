<script setup>
defineProps({
    row: Object,
    col: Object
});

// console.log(row, col);
</script>
<template>
    <span class="txt" :class="{ 'txt-green': row[col.name] == 1 }">
        {{ row[col.name] == 0 ? "閒置" : "使用中" }}
    </span>
</template>
