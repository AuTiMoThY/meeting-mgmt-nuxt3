<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import InputField from "~/components/FrmField/InputField.vue";
import SelectField from "~/components/FrmField/SelectField.vue";

import { meetingDateDs } from "~/data/meetingDateDs";

// Import necessary components and composables

// Component setup
const route = useRoute();
const router = useRouter();

const imgPath = useConfig().imgPath;
const saveIcon = computed(() => {
    return meetingId.value ? "save" : "add";
});
const saveBtnTxt = computed(() => {
    return meetingId.value ? "儲存" : "新增";
});

const meetingId = ref(null);
const currentRoom = ref(0);

// State variables
const meetingData = ref({
    id: "",
    name: "",
    room: "",
    date: "",
    timeStart: "",
    timeEnd: "",
    people: ""
});

const roomOptions = ref([
    "請選擇會議室",
    "A會議室",
    "B會議室",
    "C會議室",
    "D會議室",
    "E會議室",
    "F會議室",
    "G會議室",
    "H會議室",
    "I會議室",
    "J會議室"
]);

// Lifecycle hooks
onMounted(() => {
    meetingId.value = Number(route.query.id);
    meetingData.value = meetingDateDs.data.find((item) => item.id === meetingId.value);

    console.log(meetingId.value);
    console.log(meetingData.value);

    // if (meetingId.value) {
    //     // TODO: Fetch meeting data based on ID
    //     console.log("Fetching meeting data for ID:", meetingId.value);
    // }
});

// Methods
const saveMeeting = () => {
    // TODO: Implement save logic
    console.log("Saving meeting:", meetingData.value);
};

const cancelEdit = () => {
    router.push("/date");
};
</script>

<template>
    <main class="page_main page-date-edit">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">{{ meetingId ? "編輯會議" : "新增會議" }}</h1>
                <button class="reset-btn">
                    <AuBtn
                        class="au_btn-float"
                        :txt="saveBtnTxt"
                        style="--txt-color: var(--primary-5); --bd-color: transparent">
                        <template #icon-prepend>
                            <AuImg :default-src="`${imgPath}icons/${saveIcon}.svg`"></AuImg>
                        </template>
                    </AuBtn>
                </button>
            </div>
            <div class="page_main-bd">
                <form class="frm-wrap">
                    <div class="frm-row">
                        <InputField
                            id="meeting_name"
                            v-model="meetingData.name"
                            class="frm_field-v"
                            label="會議主題"
                            placeholder="請輸入會議主題"></InputField>
                    </div>
                    <div class="frm-row">
                        <SelectField
                            id="meeting_room"
                            v-model="meetingData.room"
                            class="frm_field-v"
                            label="會議室"
                            :current-selected="currentRoom"
                            :options="roomOptions"></SelectField>
                    </div>
                    <div class="frm-row">
                        <SelectField
                            id="meeting_people"
                            v-model="meetingData.people"
                            class="frm_field-v"
                            label="選取與會人員"
                            :current-selected="currentRoom"
                            :options="roomOptions"></SelectField>
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
    </main>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
