<script setup>
// import { useRoute, useRouter } from "vue-router";
import InputField from "~/components/FrmField/InputField.vue";

import { peopleDs } from "~/data/peopleDs";

const route = useRoute();
const router = useRouter();

const imgPath = useConfig().imgPath;
const iconFileName = computed(() => {
    return dataId.value ? "save.svg" : "add.svg";
});
const saveBtnTxt = computed(() => {
    return dataId.value ? "儲存" : "發佈";
});
const dataId = ref(Number(route.query.id) || null);

useHead({
    title: computed(() => (dataId.value ? "編輯人員" : "新增人員"))
});

const peopleData = ref({
    id: "",
    name: "",
    status: 0
});

const isOpenEditOK = ref(false);
const isOpenAddOK = ref(false);

const saveData = () => {
    const data = {
        ...peopleData.value
    };
    console.log("saveData", data);

    if (dataId.value) {
        // 編輯
        isOpenEditOK.value = true;
    } else {
        // 新增
        isOpenAddOK.value = true;
    }

    setTimeout(() => {
        router.push("/people");
    }, 1500);
};

onMounted(() => {
    if (dataId.value) {
        const foundData = peopleDs.data.find((item) => item.id === dataId.value);
        console.log("foundData", foundData);
        if (foundData) {
            peopleData.value = foundData;
        }
    }
});
</script>
<template>
    <main class="page_main page-edit">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">{{ dataId ? "編輯人員" : "新增人員" }}</h1>
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
                                id="people_name"
                                v-model="peopleData.name"
                                class="frm_field-v"
                                label="人員名稱"
                                placeholder="請輸入人員名稱"></InputField>
                        </div>
                        <div class="frm-group">
                            <InputField
                                id="people_duties"
                                v-model="peopleData.duties"
                                class="frm_field-v"
                                label="職位"
                                placeholder="請輸入職位"></InputField>
                        </div>
                    </div>
                    <div class="frm-row">
                        <div class="frm-group">
                            <InputField
                                id="people_comp"
                                v-model="peopleData.comp"
                                class="frm_field-v"
                                label="所屬公司"
                                placeholder="請輸入所屬公司"></InputField>
                        </div>
                        <div class="frm-group">
                            <InputField
                                id="people_department"
                                v-model="peopleData.department"
                                class="frm_field-v"
                                label="所屬單位"
                                placeholder="請輸入部門/單位名稱"></InputField>
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
        <AuModal v-if="isOpenAddOK" modal-type="addOK"></AuModal>
    </main>
</template>
