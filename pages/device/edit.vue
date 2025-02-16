<script setup>
// import { useRoute, useRouter } from "vue-router";
import InputField from "~/components/FrmField/InputField.vue";
import SelectField from "~/components/FrmField/SelectField.vue";
import { deviceDs } from "~/data/deviceDs";
import { deviceTypeDs } from "~/data/deviceTypeDs";

const route = useRoute();
const router = useRouter();

const imgPath = useConfig().imgPath;
const iconFileName = computed(() => {
    return dataId.value ? "save.svg" : "add.svg";
});
const saveBtnTxt = computed(() => {
    return dataId.value ? "儲存" : "連結設備";
});
const dataId = ref(Number(route.query.id) || null);

useHead({
    title: computed(() => (dataId.value ? "編輯設備" : "新增設備"))
});

const deviceData = ref({
    id: "",
    name: "",
    type: {
        id: "",
        name: ""
    },
    number: ""
});

const deviceTypeOptions = deviceTypeDs.data.map((item) => ({
    ...item,
    label: item.name
}));

const isOpenEditOK = ref(false);
const isOpenLinkOK = ref(false);
const isOpenLinkIng = ref(false);

const saveData = () => {
    const data = {
        ...deviceData.value
    };
    console.log("saveData", data);

    if (dataId.value) {
        // 編輯
        isOpenEditOK.value = true;

        setTimeout(() => {
            router.push("/device");
        }, 1500);
    } else {
        // 新增
        isOpenLinkIng.value = true;

        setTimeout(() => {
            isOpenLinkIng.value = false;
            isOpenLinkOK.value = true;
        }, 1500);

        // 連結成功後，跳轉到設備列表
        setTimeout(() => {
            router.push("/device");
        }, 3000);
    }

    // setTimeout(() => {
    //     router.push("/device");
    // }, 3000);
};

onMounted(() => {
    if (dataId.value) {
        const foundData = deviceDs.data.find((item) => item.id === dataId.value);
        console.log("foundData", foundData);
        if (foundData) {
            deviceData.value = foundData;
        }
    }
});
</script>
<template>
    <main class="page_main page-edit">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">{{ dataId ? "編輯設備" : "新增設備" }}</h1>
                <button class="reset-btn">
                    <AuBtn
                        class="au_btn-float"
                        :txt="saveBtnTxt"
                        style="--txt-color: var(--primary-5); --bd-color: transparent"
                        @click="saveData">
                        <template #icon-prepend>
                            <AuImg :default-src="`${imgPath}icons/${iconFileName}`"></AuImg>
                        </template>
                    </AuBtn>
                </button>
            </div>
            <div class="page_main-bd">
                <form class="frm-wrap">
                    <div class="frm-row">
                        <div class="frm-group">
                            <InputField
                                id="device_name"
                                v-model="deviceData.name"
                                class="frm_field-v"
                                label="設備名稱"
                                placeholder="請輸入設備名稱"></InputField>
                        </div>
                        <div class="frm-group">
                            <InputField
                                id="device_number"
                                v-model="deviceData.number"
                                class="frm_field-v"
                                label="設備編號"
                                placeholder="請輸入設備編號"></InputField>
                        </div>
                        <div class="frm-group">
                            <SelectField
                                id="device_type"
                                v-model="deviceData.type"
                                class="frm_field-v"
                                label="設備類型"
                                placeholder="請選擇設備類型"
                                :options="deviceTypeOptions"></SelectField>
                        </div>
                    </div>
                </form>
                <!-- TODO: Add form fields for editing meeting data -->
                <!-- <form @submit.prevent="saveMeeting">
                    <div class="form-actions">
                        <button type="submit" class="btn-save">Save</button>
                        <button type="button" class="btn-cancel" @click="cancelEdit">Cancel</button>
                    </div>
                </form> -->
            </div>
        </div>
        <AuModal v-if="isOpenEditOK" modal-type="editOK"></AuModal>
        <AuModal v-if="isOpenLinkIng" modal-type="linkIng"></AuModal>
        <AuModal v-if="isOpenLinkOK" modal-type="linkOK"></AuModal>
    </main>
</template>
