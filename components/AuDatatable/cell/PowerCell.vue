<script setup>
defineProps({
    row: Object,
    col: Object
});
</script>
<template>
    <span class="txt" :class="{ 'txt-red': row[col.name] <= 20 }"> {{ row[col.name] }}% </span>
</template>
