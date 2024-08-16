<script setup>
const props = defineProps({
    label: String,
    id: String,
    placeholder: String,
    modelValue: String
});
const emit = defineEmits(["update:modelValue"]);
const isFocused = ref(false);

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

watch(
    () => props.modelValue,
    (newVal) => {
        value.value = newVal;
    }
);
</script>
<template>
    <div class="frm_field" :class="{ 'js-focus': isFocused }">
        <label :for="id" class="frm_field-label">{{ label }}</label>
        <div class="frm_field-block">
            <div class="frm_field-ctrler">
                <input
                    :id="id"
                    v-model.trim="value"
                    type="text"
                    class="frm_field-input"
                    :placeholder="placeholder"
                    @input="handleInput"
                    @focus="handleFocus"
                    @blur="handleBlur" />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
// 元件style由 main.scss 載入
</style>
