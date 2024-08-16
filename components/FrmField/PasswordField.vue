<script setup>
const props = defineProps({
    label: String,
    id: String,
    placeholder: String,
    modelValue: String
});
const emit = defineEmits(["update:modelValue"]);
const isFocused = ref(false);
const fieldType = ref("password");

const value = ref(props.modelValue);

const handleInput = () => {
    emit("update:modelValue", value.value);
    // console.log(value.value);
};

// 處理input聚焦事件
const handleFocus = () => {
    isFocused.value = true; // 設置焦點狀態為true
};

// 處理input失焦事件
const handleBlur = () => {
    isFocused.value = false; // 設置焦點狀態為false
};

const togglePassword = () => {
    return (fieldType.value = fieldType.value === "password" ? "text" : "password");
};

watch(
    () => props.modelValue,
    (newVal) => {
        value.value = newVal;
    }
);
</script>
<template>
    <div class="frm_field password_field" :class="{ 'js-focus': isFocused }">
        <label :for="id" class="frm_field-label">{{ label }}</label>
        <div class="frm_field-block">
            <div class="frm_field-ctrler">
                <input
                    :id="id"
                    v-model.trim="value"
                    :type="fieldType"
                    class="frm_field-input"
                    :placeholder="placeholder"
                    @input="handleInput"
                    @focus="handleFocus"
                    @blur="handleBlur" />
                <button type="button" class="toggle_password_btn" @click="togglePassword()">
                    <i v-if="fieldType === 'text'" class="fa-solid fa-eye"></i>
                    <i v-if="fieldType === 'password'" class="fa-solid fa-eye-slash"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// 元件style由 main.scss 載入

.toggle_password_btn {
    width: 45px;
    border: none;
    background-color: transparent;
    transition: $transition-base;
    border-radius: 0 $border-radius-field $border-radius-field 0;
    color: color("gray-4");
    &:hover {
        background-color: color("gray-2");
    }
}
</style>
