<script setup>
const imgPath = useConfig().imgPath;

const props = defineProps({
    label: String,
    id: String,
    options: Array,
    currentSelected: Number
});
// const emit = defineEmits(["update:modelValue"]);
// const isFocused = ref(false);

// const value = ref(props.modelValue);

// const handleInput = () => {
//     emit("update:modelValue", value.value);
//     // console.log(value.value);
// };

// // 處理input聚焦事件
// const handleFocus = () => {
//     isFocused.value = true; // 設置焦點狀態為true
// };

// // 處理input失焦事件
// const handleBlur = () => {
//     isFocused.value = false; // 設置焦點狀態為false
// };

// watch(
//     () => props.modelValue,
//     (newVal) => {
//         value.value = newVal;
//     }
// );

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
    <div class="frm_field">
        <label :for="id" class="frm_field-label">{{ label }}</label>
        <div class="frm_field-block">
            <div class="frm_field-ctrler">
                <div class="frm_dropdown">
                    <div class="frm_dropdown-inner" @click="toggleMenu">
                        <div class="txt">
                            <div class="current font-title-s txt-gray-6">{{ currentValue }}</div>
                        </div>
                        <AuImg
                            class="arrow"
                            :default-src="`${imgPath}icons/dropdown-arrow.svg`"></AuImg>
                    </div>
                    <div ref="menu" class="frm_dropdown-menu">
                        <ul class="frm_dropdown-menu-list">
                            <li
                                v-for="(option, index) in options"
                                :key="index"
                                class="frm_dropdown-menu-item"
                                :class="{ active: index === currentSelected }"
                                @click="handleOptionClick(index)">
                                {{ option }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.frm_dropdown {
    width: 100%;
}
.frm_dropdown-menu {
    display: none;
}
.frm_dropdown-menu.show {
    display: block;
}
</style>
