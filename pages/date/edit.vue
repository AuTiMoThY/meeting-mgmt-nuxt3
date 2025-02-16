<script setup>
import { useRoute, useRouter } from "vue-router";
import InputField from "~/components/FrmField/InputField.vue";
import SelectField from "~/components/FrmField/SelectField.vue";
import SelectCheckboxField from "~/components/FrmField/SelectCheckboxField.vue";

import { meetingDateDs } from "~/data/meetingDateDs";
import { roomDs } from "~/data/roomDs";
import { peopleDs } from "~/data/peopleDs";

// Component setup
const route = useRoute();
const router = useRouter();

const imgPath = useConfig().imgPath;
const dataId = ref(Number(route.query.id) || null);
const iconFileName = computed(() => {
    return dataId.value ? "save.svg" : "add.svg";
});
const saveBtnTxt = computed(() => {
    return dataId.value ? "儲存" : "發佈";
});

useHead({
    title: computed(() => (dataId.value ? "編輯會議" : "新增會議"))
});

// State variables
const meetingData = ref({
    id: "",
    name: "",
    room: {},
    date: "",
    timeStart: {
        hour: "",
        minute: ""
    },
    timeEnd: {
        hour: "",
        minute: ""
    },
    peopleList: []
});

// 表單選項
const roomOptions = computed(() => {
    return roomDs.data.map((item) => ({
        ...item,
        label: item.room
    }));
});
// roomOptions.value = ["請選擇會議室", ...roomOptions.value];

// const roomOptions = ref(["請選擇會議室", ...roomDs.data]);
const peopleOptions = ref(["請選擇與會人員", ...peopleDs.data]);
// const roomOptions = computed(() => [
//     { value: "", label: "請選擇會議室" },
//     ...roomDs.data.map((item) => ({
//         value: item.room,
//         label: item.room
//     }))
// ]);

const hourOptions = computed(() => {
    return Array.from({ length: 24 }, (_, i) => {
        const value = i < 10 ? `0${i}` : `${i}`;
        return {
            id: value,
            label: value,
            value
        };
    });
});

const minuteOptions = computed(() => {
    return Array.from({ length: 60 }, (_, i) => {
        const value = i < 10 ? `0${i}` : `${i}`;
        return {
            id: value,
            label: value,
            value
        };
    });
});
// const peopleOptions = computed(() => [
//     { value: "", label: "請選擇與會人員" },
//     ...peopleDs.data.map((item) => ({
//         value: item.id,
//         label: item.name
//     }))
// ]);

// const useSelectTime = () => {
//     const {
//         isOpen: isOpenSelectHour,
//         openModal: openSelectHour,
//         closeModal: closeSelectHour
//     } = useSelectModal();
//     const {
//         isOpen: isOpenSelectMinute,
//         openModal: openSelectMinute,
//         closeModal: closeSelectMinute
//     } = useSelectModal();

//     const currentSelectType = ref("");
//     const handleTimeClick = (type) => {
//         currentSelectType.value = type;

//         if (type.includes("hour")) {
//             openSelectHour();
//         } else {
//             openSelectMinute();
//         }
//     };

//     const handleSelectHourClick = (type, hour) => {
//         if (type.includes("start")) {
//             meetingData.value.timeStart.hour = hour;
//         } else {
//             meetingData.value.timeEnd.hour = hour;
//         }
//         closeSelectHour();
//     };

//     const handleSelectMinuteClick = (type, minute) => {
//         if (type.includes("start")) {
//             meetingData.value.timeStart.minute = minute;
//         } else {
//             meetingData.value.timeEnd.minute = minute;
//         }
//         closeSelectMinute();
//     };

//     return {
//         currentSelectType,
//         isOpenSelectHour,
//         openSelectHour,
//         closeSelectHour,
//         isOpenSelectMinute,
//         openSelectMinute,
//         closeSelectMinute,
//         handleTimeClick,
//         handleSelectHourClick,
//         handleSelectMinuteClick
//     };
// };

// const {
//     currentSelectType,
//     isOpenSelectHour,
//     closeSelectHour,
//     isOpenSelectMinute,
//     closeSelectMinute,
//     handleTimeClick,
//     handleSelectHourClick,
//     handleSelectMinuteClick
// } = useSelectTime();

// 選日期
const useDatePicker = () => {
    const attrs = ref([
        {
            key: "today",
            highlight: {
                color: "blue",
                fillMode: "solid"
            },
            dates: meetingData.value.date
        }
    ]);

    // 日期格式化函數
    const formatDate = (date) => {
        if (!date) return "";
        if (typeof date === "string") return date;

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}/${month}/${day}`;
    };

    return {
        attrs,
        formatDate
    };
};
const { attrs, formatDate } = useDatePicker();

const isOpenEditOK = ref(false);
const isOpenAddOK = ref(false);

const saveData = () => {
    // TODO: Implement save logic
    const data = {
        ...meetingData.value,
        date: formatDate(meetingData.value.date)
    };
    console.log("Saving meeting:", data);

    console.log("dataId.value", dataId.value);

    if (dataId.value) {
        // 編輯
        isOpenEditOK.value = true;
    } else {
        // 新增
        isOpenAddOK.value = true;
    }

    setTimeout(() => {
        router.push("/date");
    }, 1500);
};

const cancelEdit = () => {
    router.push("/date");
};

// Lifecycle hooks
onMounted(() => {
    if (dataId.value) {
        // 如果有 dataId，從 meetingDateDs 中查找對應數據
        const foundMeeting = meetingDateDs.data.find((item) => item.id === dataId.value);

        if (foundMeeting) {
            // 解構時間字符串
            const [startHour, startMinute] = foundMeeting.timeStart.split(":");
            const [endHour, endMinute] = foundMeeting.timeEnd.split(":");

            // 更新 meetingData
            meetingData.value = {
                id: foundMeeting.id,
                name: foundMeeting.name,
                room: {
                    ...foundMeeting.room,
                    label: foundMeeting.room.room
                },
                date: foundMeeting.date,
                timeStart: {
                    hour: startHour,
                    minute: startMinute
                },
                timeEnd: {
                    hour: endHour,
                    minute: endMinute
                },
                peopleList: foundMeeting.peopleList
            };
        }

        console.log("meetingData", meetingData.value);
    }
});
</script>

<template>
    <main class="page_main page-edit">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">{{ dataId ? "編輯會議" : "新增會議" }}</h1>
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
                <form class="frm-wrap row-2-part">
                    <div class="frm-row">
                        <div class="frm-group">
                            <InputField
                                id="meeting_name"
                                v-model="meetingData.name"
                                class="frm_field-v"
                                label="會議主題"
                                placeholder="請輸入會議主題"></InputField>
                        </div>
                        <div class="frm-group">
                            <SelectField
                                id="meeting_room"
                                v-model="meetingData.room"
                                class="frm_field-v"
                                label="會議室"
                                :options="roomOptions"></SelectField>
                        </div>
                        <div class="frm-group">
                            <SelectCheckboxField
                                id="meeting_people"
                                v-model="meetingData.peopleList"
                                class="frm_field-v"
                                label="選取與會人員"
                                :options="peopleOptions"></SelectCheckboxField>
                        </div>
                    </div>
                    <div class="frm-row">
                        <div class="frm-group">
                            <InputField
                                id="meeting_date"
                                v-model="meetingData.date"
                                :model-value="formatDate(meetingData.date)"
                                class="frm_field-v"
                                label="會議日期"
                                placeholder="請選擇會議日期"
                                @update:model-value="
                                    (val) => (meetingData.date = val)
                                "></InputField>

                            <VDatePicker v-model="meetingData.date" :attributes="attrs" />
                        </div>
                        <div class="frm-group">
                            <div class="frm_field frm_field-v">
                                <label class="frm_field-label">會議時間</label>
                                <div class="frm_field-block frm_field-time">
                                    <div class="frm_field-ctrler">
                                        <SelectField
                                            id="meeting_timeStart_hour"
                                            v-model="meetingData.timeStart.hour"
                                            class="frm_field-v"
                                            label=""
                                            :options="hourOptions" />
                                    </div>
                                    <span class="frm_field-timecolon">:</span>
                                    <div class="frm_field-ctrler">
                                        <SelectField
                                            id="meeting_timeStart_minute"
                                            v-model="meetingData.timeStart.minute"
                                            class="frm_field-v"
                                            label=""
                                            :options="minuteOptions"></SelectField>
                                    </div>
                                    <span class="frm_field-separator">~</span>
                                    <div class="frm_field-ctrler">
                                        <SelectField
                                            id="meeting_timeEnd_hour"
                                            v-model="meetingData.timeEnd.hour"
                                            class="frm_field-v"
                                            label=""
                                            :options="hourOptions"></SelectField>
                                    </div>
                                    <span class="frm_field-timecolon">:</span>
                                    <div class="frm_field-ctrler">
                                        <SelectField
                                            id="meeting_timeEnd_minute"
                                            v-model="meetingData.timeEnd.minute"
                                            class="frm_field-v"
                                            label=""
                                            :options="minuteOptions"></SelectField>
                                    </div>
                                </div>
                                <!-- <div class="frm_field-block frm_field-time">
                                    <div class="frm_field-ctrler">
                                        <input
                                            v-model="meetingData.timeStart.hour"
                                            type="text"
                                            class="frm_field-input"
                                            placeholder="09"
                                            @click="handleTimeClick('start-hour')" />
                                    </div>
                                    <span class="frm_field-timecolon">:</span>
                                    <div class="frm_field-ctrler">
                                        <input
                                            v-model="meetingData.timeStart.minute"
                                            type="text"
                                            class="frm_field-input"
                                            placeholder="00"
                                            @click="handleTimeClick('start-minute')" />
                                    </div>
                                    <span class="frm_field-separator">~</span>
                                    <div class="frm_field-ctrler">
                                        <input
                                            v-model="meetingData.timeEnd.hour"
                                            type="text"
                                            class="frm_field-input"
                                            placeholder="18"
                                            @click="handleTimeClick('end-hour')" />
                                    </div>
                                    <span class="frm_field-timecolon">:</span>
                                    <div class="frm_field-ctrler">
                                        <input
                                            v-model="meetingData.timeEnd.minute"
                                            type="text"
                                            class="frm_field-input"
                                            placeholder="00"
                                            @click="handleTimeClick('end-minute')" />
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </form>
                <!-- TODO: Add form fields for editing meeting data -->
                <!-- <form @submit.prevent="saveData">
                    <div class="form-actions">
                        <button type="submit" class="btn-save">Save</button>
                        <button type="button" class="btn-cancel" @click="cancelEdit">Cancel</button>
                    </div>
                </form> -->
            </div>
        </div>
        <!-- <AuModal
            v-if="isOpenSelectHour"
            modal-type="selectHour"
            class="au_modal-selectTime"
            @close="closeSelectHour">
            <div class="select-hour-btns">
                <AuBtn txt="09" @click="handleSelectHourClick(currentSelectType, '09')"></AuBtn>
                <AuBtn txt="10" @click="handleSelectHourClick(currentSelectType, '10')"></AuBtn>
                <AuBtn txt="11" @click="handleSelectHourClick(currentSelectType, '11')"></AuBtn>
                <AuBtn txt="12" @click="handleSelectHourClick(currentSelectType, '12')"></AuBtn>
                <AuBtn txt="13" @click="handleSelectHourClick(currentSelectType, '13')"></AuBtn>
                <AuBtn txt="14" @click="handleSelectHourClick(currentSelectType, '14')"></AuBtn>
                <AuBtn txt="15" @click="handleSelectHourClick(currentSelectType, '15')"></AuBtn>
                <AuBtn txt="16" @click="handleSelectHourClick(currentSelectType, '16')"></AuBtn>
                <AuBtn txt="17" @click="handleSelectHourClick(currentSelectType, '17')"></AuBtn>
                <AuBtn txt="18" @click="handleSelectHourClick(currentSelectType, '18')"></AuBtn>
            </div>
        </AuModal>
        <AuModal
            v-if="isOpenSelectMinute"
            modal-type="selectMinute"
            class="au_modal-selectTime"
            @close="closeSelectMinute">
            <div class="select-hour-btns">
                <AuBtn txt="00" @click="handleSelectMinuteClick(currentSelectType, '00')"></AuBtn>
                <AuBtn txt="15" @click="handleSelectMinuteClick(currentSelectType, '15')"></AuBtn>
                <AuBtn txt="30" @click="handleSelectMinuteClick(currentSelectType, '30')"></AuBtn>
                <AuBtn txt="45" @click="handleSelectMinuteClick(currentSelectType, '45')"></AuBtn>
            </div>
        </AuModal> -->
        <AuModal v-if="isOpenEditOK" modal-type="editOK"></AuModal>
        <AuModal v-if="isOpenAddOK" modal-type="addOK"></AuModal>
    </main>
</template>

<style scoped>
/* Add any component-specific styles here */
:deep(.vc-container) {
    width: 100%;
    margin-top: 4px;
}
</style>
