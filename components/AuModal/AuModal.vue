<script setup>
const imgPath = useConfig().imgPath;

const props = defineProps({
    modalType: {
        type: String,
        default: "view"
    }
});

// watch(
//     () => props.modalType,
//     (newVal) => {
//         console.log("newVal", newVal);

//         if (newVal === "editOK") {
//             setTimeout(() => {
//                 emit("close");
//             }, 3000);
//         }
//     }
// );

onMounted(() => {
    console.log("props.modalType", props.modalType);
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
                    <div v-if="$slots.ft" class="au_modal-ft">
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
            <template v-else-if="props.modalType === 'logout'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <div class="title">登出確認</div>
                    </div>
                    <div class="au_modal-ft">
                        <div class="btn-group">
                            <AuBtn txt="登出" @click="$emit('logout')"></AuBtn>
                            <AuBtn
                                txt="取消"
                                class="au_btn-style-primary"
                                @click="$emit('close')"></AuBtn>
                        </div>
                    </div>
                </div>
            </template>

            <!-- <template v-else-if="props.modalType === 'selectHour'">
                <div class="au_modal-close">
                    <AuBtn @click="$emit('close')">
                        <template #bg>
                            <AuImg :default-src="`${imgPath}icons/close.svg`"></AuImg>
                        </template>
                    </AuBtn>
                </div>
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <div class="title">選擇時段</div>
                    </div>
                    <div class="au_modal-bd">
                        <div class="content">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else-if="props.modalType === 'selectMinute'">
                <div class="au_modal-close">
                    <AuBtn @click="$emit('close')">
                        <template #bg>
                            <AuImg :default-src="`${imgPath}icons/close.svg`"></AuImg>
                        </template>
                    </AuBtn>
                </div>
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <div class="title">選擇時段</div>
                    </div>
                    <div class="au_modal-bd">
                        <div class="content">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </template> -->
            <template v-else-if="props.modalType === 'editOK'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <AuImg :default-src="`${imgPath}icons/check_circle.svg`"></AuImg>
                        <div class="title">修改完成</div>
                    </div>
                </div>
            </template>
            <template v-else-if="props.modalType === 'addOK'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <AuImg :default-src="`${imgPath}icons/check_circle.svg`"></AuImg>
                        <div class="title">新增完成</div>
                    </div>
                </div>
            </template>
            <template v-else-if="props.modalType === 'linkIng'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <AuImg :default-src="`${imgPath}icons/Loading.png`"></AuImg>
                        <div class="title">連結中...</div>
                    </div>
                </div>
            </template>
            <template v-else-if="props.modalType === 'linkOK'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <AuImg :default-src="`${imgPath}icons/check_circle.svg`"></AuImg>
                        <div class="title">連結完成</div>
                    </div>
                </div>
            </template>

            <template v-else-if="props.modalType === 'sendIng'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <AuImg :default-src="`${imgPath}icons/send-hover.svg`"></AuImg>
                        <div class="title">發送中...</div>
                    </div>
                </div>
            </template>
            <template v-else-if="props.modalType === 'sendOK'">
                <div class="au_modal-container">
                    <div class="au_modal-hd">
                        <AuImg :default-src="`${imgPath}icons/check_circle.svg`"></AuImg>
                        <div class="title">發送成功</div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
