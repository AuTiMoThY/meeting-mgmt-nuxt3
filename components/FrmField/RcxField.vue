<script setup>
const props = defineProps({
    label: String,
    rcxId: String,
    modelValue: Boolean
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
    get: () => props.modelValue,
    set: (newValue) => emit("update:modelValue", newValue)
});
</script>
<template>
    <div class="frm_rcx">
        <label :for="props.rcxId" class="frm_rcx-label">
            <input :id="props.rcxId" v-model="value" type="checkbox" class="frm_rcx-input" />
            <div class="frm_rcx-inner">
                <div class="choicemark">
                    <svg
                        class="choicemark-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none">
                        <mask
                            id="mask0_28_761"
                            style="mask-type: alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="25"
                            height="25">
                            <rect x="0.765015" y="0.144836" width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_28_761)">
                            <path
                                d="M10.3215 15.3073L18.7965 6.83235C18.9965 6.63235 19.2298 6.53235 19.4965 6.53235C19.7632 6.53235 19.9965 6.63235 20.1965 6.83235C20.3965 7.03235 20.4965 7.26985 20.4965 7.54485C20.4965 7.81985 20.3965 8.05735 20.1965 8.25735L11.0215 17.4573C10.8215 17.6573 10.5882 17.7573 10.3215 17.7573C10.0548 17.7573 9.82151 17.6573 9.62151 17.4573L5.32151 13.1573C5.12151 12.9573 5.02567 12.7198 5.03401 12.4448C5.04234 12.1698 5.14651 11.9323 5.34651 11.7323C5.54651 11.5323 5.78401 11.4323 6.05901 11.4323C6.33401 11.4323 6.57151 11.5323 6.77151 11.7323L10.3215 15.3073Z"
                                fill="#ffffff" />
                        </g>
                    </svg>
                </div>
                <div class="label">{{ props.label }}</div>
            </div>
        </label>
    </div>
</template>
