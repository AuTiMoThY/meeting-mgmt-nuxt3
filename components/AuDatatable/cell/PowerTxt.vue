<script setup>
defineProps({
    txt: [String, Number]
});
</script>
<template>
    <span class="txt" :class="{ 'txt-red': txt <= 20 }"> {{ txt }}% </span>
</template>
