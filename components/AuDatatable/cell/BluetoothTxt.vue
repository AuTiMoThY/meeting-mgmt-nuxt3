<script setup>
defineProps({
    txt: [String, Number]
});
</script>
<template>
    <span class="txt" :class="{ 'txt-red': txt == 0 }"> {{ txt == 0 ? "OFF" : "ON" }} </span>
</template>
