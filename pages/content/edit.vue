<script setup>
// import { useRoute, useRouter } from "vue-router";
import InputField from "~/components/FrmField/InputField.vue";
import SelectField from "~/components/FrmField/SelectField.vue";
import { contentDs } from "~/data/contentDs";
import { meetingDateDs } from "~/data/meetingDateDs";
import { deviceTypeDs } from "~/data/deviceTypeDs";
const deviceType = ref(deviceTypeDs);

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
    title: computed(() => (dataId.value ? "編輯內容" : "新增內容"))
});

const contentData = ref({
    id: "",
    name: "",
    can_use_device: {
        id: 0,
        name: ""
    },
    applied_device: 0,
    meeting: {
        id: "",
        name: ""
    }
});

const meetingOptions = meetingDateDs.data.map((item) => ({
    ...item,
    label: item.name
}));

const typeOptions = [
    ...deviceType.value.data.map((item) => ({
        ...item,
        label: item.name
    }))
];

const isOpenEditOK = ref(false);
const isOpenAddOK = ref(false);

const saveData = () => {
    const data = {
        ...contentData.value,
        can_use_device: contentData.value.can_use_device.name
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
        router.push("/content");
    }, 1500);
};

const useShowMeetingInfo = () => {
    const isShowMeetingInfo = ref(false);

    if (dataId.value) {
        isShowMeetingInfo.value = true;
    } else {
        // 監聽 meeting 的變化
        watch(
            () => contentData.value.meeting,
            (newVal) => {
                console.log("contentData.value.meeting", contentData.value.meeting);
                // 當選擇了會議且有 id 時，顯示會議資訊
                isShowMeetingInfo.value = newVal && newVal.id;
            },
            { immediate: true }
        );
    }

    return {
        isShowMeetingInfo
    };
};
const { isShowMeetingInfo } = useShowMeetingInfo();

onMounted(() => {
    // 從 URL 獲取 type 參數
    const typeFromQuery = Number(route.query.type) || 0;

    if (dataId.value) {
        // 編輯模式
        const foundData = contentDs.data.find((item) => item.id === dataId.value);
        if (foundData) {
            contentData.value = { ...foundData };
        }
    } else if (typeFromQuery !== 0) {
        // 新增模式，設定預設的設備類型
        contentData.value.can_use_device = typeOptions.find(
            (option) => option.id === typeFromQuery
        ) || {
            id: 0,
            name: ""
        };
    }
});
</script>
<template>
    <main class="page_main page-edit">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">{{ dataId ? "編輯內容" : "新增內容" }}</h1>
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
                    <div class="frm-row style-select">
                        <div class="style-select-preview">
                            <AuImg :default-src="`${imgPath}style-1-preview.jpg`"></AuImg>
                        </div>
                        <ul class="style-select-list">
                            <li class="style-select-item">
                                <AuBtn class="au_btn-effecy" txt="樣式1" type="button"></AuBtn>
                            </li>
                            <li class="style-select-item">
                                <AuBtn class="au_btn-effecy" txt="樣式2" type="button"></AuBtn>
                            </li>
                            <li class="style-select-item">
                                <AuBtn class="au_btn-effecy" txt="樣式3" type="button"></AuBtn>
                            </li>
                        </ul>
                    </div>
                    <div class="frm-row">
                        <div class="frm-group">
                            <SelectField
                                id="content_can_use_device"
                                v-model="contentData.can_use_device"
                                class="frm_field-v"
                                label="設備類型"
                                placeholder="請選擇設備類型"
                                :options="typeOptions"></SelectField>
                        </div>
                        <div class="frm-group">
                            <InputField
                                id="content_name"
                                v-model="contentData.name"
                                class="frm_field-v"
                                label="內容名稱"
                                placeholder="請輸入內容名稱"></InputField>
                        </div>

                        <div class="frm-group">
                            <SelectField
                                id="content_meeting"
                                v-model="contentData.meeting"
                                class="frm_field-v"
                                label="選擇會議"
                                placeholder="請選擇會議"
                                :options="meetingOptions"></SelectField>
                            <div v-if="isShowMeetingInfo" class="meeting-info">
                                <div class="meeting-info-hd">
                                    <span class="room">{{ contentData.meeting?.room?.room }}</span>
                                    <span class="datetime">
                                        <span class="date">{{ contentData.meeting.date }}</span>
                                        <span class="time">
                                            {{ contentData.meeting.timeStart }} ~
                                            {{ contentData.meeting.timeEnd }}
                                        </span>
                                    </span>
                                </div>
                                <div class="meeting-info-bd">
                                    <div class="title">與會人員</div>
                                    <ul class="people-list">
                                        <li
                                            v-for="people in contentData.meeting.peopleList"
                                            :key="people.id"
                                            class="people-item">
                                            <span class="name">{{ people.name }}</span>
                                            <span class="comp">{{ people.comp }}</span>
                                            <span class="department">{{ people.department }}</span>
                                            <span class="duties">{{ people.duties }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="frm-group">
                            <InputField
                                id="content_qrcode"
                                v-model="contentData.qrcode"
                                class="frm_field-v"
                                label="QRCode 網址"
                                placeholder="請輸入網址"></InputField>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <AuModal v-if="isOpenEditOK" modal-type="editOK"></AuModal>
        <AuModal v-if="isOpenAddOK" modal-type="addOK"></AuModal>
    </main>
</template>
<style lang="scss">
@import "./edit.scss";
</style>
