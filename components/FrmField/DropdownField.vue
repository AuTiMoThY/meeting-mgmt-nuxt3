<script setup>
const props = defineProps({
    label: String,
    options: Array,
    currentSelected: String
});

const emit = defineEmits(["update:currentSelected"]);

const value = computed({
    get: () => props.currentSelected,
    set: (newValue) => emit("update:currentSelected", newValue)
});

// 新增一個方法來處理選項的點擊
const handleOptionClick = (option) => {
    value.value = option;
};

// 新增一個計算屬性來獲取當前選中的值
const currentValue = computed(() => {
    return props.currentSelected || "請選擇";
});
</script>

<template>
    <div class="frm_dropdown">
        <div class="frm_dropdown-inner" @click="$refs.menu.classList.toggle('show')">
            <div class="txt">
                <div class="label">{{ label }}</div>
                <div class="current">{{ currentValue }}</div>
            </div>
        </div>
        <div class="frm_dropdown-menu" ref="menu">
            <ul class="frm_dropdown-menu-list">
                <li
                    class="frm_dropdown-menu-item"
                    v-for="(option, index) in options"
                    :key="index"
                    @click="handleOptionClick(option)">
                    {{ option }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.frm_dropdown-menu {
    display: none;
}
.frm_dropdown-menu.show {
    display: block;
}
</style>
