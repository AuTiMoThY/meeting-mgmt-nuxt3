<script setup>
const props = defineProps({
    label: String,
    options: Array,
    currentSelected: Number
});

const emit = defineEmits(["update:currentSelected"]);
const menu = ref(null);

const value = computed({
    get: () => props.currentSelected,
    set: (newValue) => emit("update:currentSelected", newValue)
});

// 新增一個方法來處理選項的點擊
const handleOptionClick = (option) => {
    value.value = option;
    toggleMenu();
};

// 新增一個計算屬性來獲取當前選中的值
const currentValue = computed(() => {
    return props.options[props.currentSelected] || "請選擇";
});

const toggleMenu = () => {
    menu.value.classList.toggle("show");
};
</script>

<template>
    <div class="frm_dropdown">
        <div class="frm_dropdown-inner" @click="toggleMenu">
            <div class="txt">
                <div class="label font-title-s txt-gray-3">{{ label }}</div>
                <div class="current font-title-s txt-gray-6">{{ currentValue }}</div>
            </div>
            <AuImg class="arrow" :default-src="`${imgPath}icons/dropdown-arrow.svg`"></AuImg>
        </div>
        <div class="frm_dropdown-menu" ref="menu">
            <ul class="frm_dropdown-menu-list">
                <li
                    class="frm_dropdown-menu-item"
                    v-for="(option, index) in options"
                    :key="index"
                    @click="handleOptionClick(index)"
                    :class="{ active: index === currentSelected }">
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
