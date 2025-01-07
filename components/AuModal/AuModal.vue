<script setup>
defineEmits(["close", "delete"]);

const imgPath = useConfig().imgPath;

const props = defineProps({
    modalType: {
        type: String,
        default: "view"
    }
});
</script>

<template>
    <div class="au_modal" :class="`au_modal-${props.modalType}`">
        <div class="au_modal-mask" @click="$emit('close')"></div>
        <div class="au_modal-wrapper">
            <template v-if="props.modalType === 'view'">
                <div class="au_modal-close">
                    <AuBtn @click="$emit('close')">
                        <template #bg>
                            <AuImg :default-src="`${imgPath}icons/close.svg`"></AuImg>
                        </template>
                    </AuBtn>
                </div>
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <slot name="hd"></slot>
                    </div>
                    <div class="au_modal-bd">
                        <slot name="bd"></slot>
                    </div>
                    <div class="au_modal-ft">
                        <slot name="ft"></slot>
                    </div>
                </div>
            </template>
            <template v-else-if="props.modalType === 'delete'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <div class="title">刪除確認</div>
                    </div>
                    <div class="au_modal-bd">
                        <div class="content">
                            您確定要刪除
                            <span class="txt-primary-color"><slot name="deleteName"></slot></span>
                            嗎?
                        </div>
                    </div>
                    <div class="au_modal-ft">
                        <div class="btn-group">
                            <AuBtn txt="刪除" @click="$emit('delete')"></AuBtn>
                            <AuBtn
                                txt="保留"
                                class="au_btn-style-primary"
                                @click="$emit('close')"></AuBtn>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
