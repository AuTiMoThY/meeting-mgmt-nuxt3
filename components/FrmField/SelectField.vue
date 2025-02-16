<script setup>
const imgPath = useConfig().imgPath;

const props = defineProps({
    label: String,
    id: String,
    options: Array,
    modelValue: [Object, String, Number]
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

const emit = defineEmits(["update:modelValue"]);
const menu = ref(null);
const dropdownId = ref(Symbol("dropdown-menu-id")); // 為每個下拉選單創建唯一ID

// 創建事件總線來管理下拉選單
const closeOtherDropdowns = (currentId) => {
    if (currentId !== dropdownId.value && menu.value?.classList.contains("show")) {
        menu.value.classList.remove("show");
    }
};

const handleClickOutside = (event) => {
    if (
        menu.value &&
        !menu.value.contains(event.target) &&
        !event.target.closest(".frm_dropdown-inner")
    ) {
        menu.value.classList.remove("show");
    }
};

const selectedValue = computed({
    get: () => props.modelValue,
    set: (newValue) => emit("update:modelValue", newValue)
});

// 處理選項的點擊
const handleOptionClick = (option) => {
    // console.log("option", option);
    selectedValue.value = option;
    toggleMenu();
};

// 獲取當前選中的值
const currentValue = computed(() => {
    if (typeof props.modelValue === "object") {
        return props.modelValue?.label || props.modelValue?.name || "請選擇";
    }
    // 如果是字串或數字，直接返回該值
    return props.modelValue || "請選擇";
});

const toggleMenu = () => {
    // 觸發關閉其他下拉選單的事件
    window.dispatchEvent(
        new CustomEvent("closeDropdowns", {
            detail: { id: dropdownId.value }
        })
    );
    menu.value.classList.toggle("show");
};

watch(
    () => props.modelValue,
    (newVal) => {
        console.log("newVal", newVal);
    }
);

onMounted(() => {
    // 註冊全局事件監聽器
    window.addEventListener("closeDropdowns", (e) => {
        closeOtherDropdowns(e.detail.id);
    });
    document.addEventListener("click", handleClickOutside);

    console.log("props.options", props.options);
});

onUnmounted(() => {
    // 移除事件監聽器
    window.removeEventListener("closeDropdowns", closeOtherDropdowns);
    document.removeEventListener("click", handleClickOutside);
});
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
                                :class="{ active: option.id === modelValue.id }"
                                @click="handleOptionClick(option)">
                                {{ option.label }}
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
</style>
