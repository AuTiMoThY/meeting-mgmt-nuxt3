<script setup>
defineProps({
    row: Object,
    col: Object
});
</script>
<template>
    <span class="txt">{{ row[col.name] }}</span>
</template>
