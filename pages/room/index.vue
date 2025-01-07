<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import RcxField from "~/components/FrmField/RcxField.vue";

import { roomDs } from "~/data/roomDs";
import { meetingDateDs } from "~/data/meetingDateDs";
const room = ref(roomDs);

const imgPath = useConfig().imgPath;

const searchKeyword = ref("");
const currentPage = ref(1);
const isShowIdle = ref(false);

const isViewData = ref(false);
const viewData = ref(null);
// const viewData = ref({
//     room: "A會議室",
//     status: 1,
//     isShowTodayMeeting: false,
//     meetingData: {
//         columns: meetingDateDs.columns
//             .filter((col) => col.name !== "operate" && col.name !== "room")
//             .sort((a, b) => {
//                 const order = ["name", "date", "time", "people"];
//                 return order.indexOf(a.name) - order.indexOf(b.name);
//             }),
//         data: meetingDateDs.data.map((item) => ({
//             ...item,
//             time: `${item.timeStart} - ${item.timeEnd}`
//         }))
//     }
// });

// 定義刪除處理函數
const handleDeleteRoom = async (deleteData) => {
    // 找到要刪除的項目索引
    const index = room.value.data.findIndex((item) => item.id === deleteData.id);
    if (index === -1) return;

    // 設置移除動畫標記
    room.value.data[index].isRemoving = true;

    // 等待動畫完成後再實際移除資料
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 移除資料
    room.value.data = room.value.data.filter((item) => item.id !== deleteData.id);
};

const {
    isOpen: isOpenDelete,
    data: deleteData,
    openDelete,
    closeDelete,
    handleDelete
} = useDeleteModal(handleDeleteRoom);

const handleOperation = (operation, rowData) => {
    console.log("Main Program: Received operation", operation, rowData);
    const meetingData = meetingDateDs.data.filter((item) => item.room === rowData.room);
    // 根據操作類型和行數據執行相應的邏輯
    switch (operation) {
        case "view":
            console.log("Viewing: ", rowData);
            viewData.value = {
                ...rowData,
                isShowTodayMeeting: false,
                meetingData: {
                    columns: meetingDateDs.columns
                        .filter((col) => col.name !== "operate" && col.name !== "room")
                        .sort((a, b) => {
                            const order = ["name", "date", "time", "people"];
                            return order.indexOf(a.name) - order.indexOf(b.name);
                        }),
                    data: computed(() => {
                        const filteredData = meetingData.map((item) => ({
                            ...item,
                            time: `${item.timeStart} - ${item.timeEnd}`
                        }));

                        if (viewData.value?.isShowTodayMeeting) {
                            // const today = new Date()
                            //     .toLocaleDateString("zh-TW", {
                            //         year: "numeric",
                            //         month: "2-digit",
                            //         day: "2-digit"
                            //     })
                            //     .replace(/\//g, "/");
                            const today = "2024/05/08";
                            return filteredData.filter((item) => item.date === today);
                        }
                        return filteredData;
                    })
                }
            };
            isViewData.value = true;
            break;
        case "edit":
            console.log("Editing: ", rowData);
            break;
        case "delete":
            console.log("Deleting: ", rowData);
            openDelete(rowData);

            break;
    }
};

const filteredRoomData = computed(() => {
    if (isShowIdle.value) {
        return room.value.data.filter((item) => item.status === 0);
    }
    return room.value.data;
});
</script>
<template>
    <main class="page_main page-date">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">會議室管理</h1>
                <button class="btn-add-date reset-btn">
                    <AuBtn
                        class="au_btn-float"
                        txt="新增會議室"
                        style="--txt-color: var(--primary-5); --bd-color: transparent">
                        <template #icon-prepend>
                            <AuImg :default-src="`${imgPath}icons/add.svg`"></AuImg>
                        </template>
                    </AuBtn>
                </button>
            </div>
            <div class="page_main-bd">
                <div class="conditional-bar">
                    <div class="conditional-bar-filter">
                        <RcxField
                            v-model="isShowIdle"
                            label="僅顯示閒置會議室"
                            rcx-id="checkboxOnlyIdle"></RcxField>
                    </div>
                    <div class="conditional-bar-search">
                        <div class="search-field">
                            <InputField
                                id="searchKeyword"
                                v-model="searchKeyword"
                                class="frm_field-v frm_field-no-border"
                                label=""
                                placeholder="搜尋..."></InputField>
                            <AuBtn class="search-btn">
                                <template #bg>
                                    <AuImg :default-src="`${imgPath}icons/search.svg`"></AuImg>
                                </template>
                            </AuBtn>
                        </div>
                    </div>
                </div>
                <AuPanel class="meeting_date">
                    <template #bd>
                        <RoomTable
                            :columns="room.columns"
                            :data="filteredRoomData"
                            @operation="handleOperation"></RoomTable>
                    </template>
                </AuPanel>
            </div>

            <div class="page_main-ft">
                <AuPagination :total-page="5" :current-page="currentPage"></AuPagination>
            </div>
        </div>
        <AuModal v-if="isViewData" class="view_data" @close="isViewData = false">
            <template #hd>
                <div class="title">
                    {{ viewData.room }}
                    <span class="status" :class="{ 'is-using': viewData.status === 1 }">{{
                        viewData.status === 1 ? "使用中" : "閒置"
                    }}</span>
                </div>
            </template>
            <template #bd>
                <RcxField
                    v-model="viewData.isShowTodayMeeting"
                    label="僅顯示今日會議"
                    rcx-id="checkboxOnlyTodayMeeting"></RcxField>
                <ViewMeetingTable
                    :columns="viewData.meetingData.columns"
                    :data="viewData.meetingData.data"></ViewMeetingTable>
            </template>
        </AuModal>
        <AuModal
            v-if="isOpenDelete"
            modal-type="delete"
            @close="closeDelete"
            @delete="handleDelete">
            <template #deleteName>{{ deleteData?.room }}</template>
        </AuModal>
    </main>
</template>
<style lang="scss" scoped>
:deep(.view_data) {
    .title {
        display: flex;
        align-items: center;
    }
    .status {
        margin-left: 10px;
        padding: 4px 8px;
        border-radius: 4px;
        background-color: var(--gray-1);
        color: var(--gray-6);
        @include font_setting("note");
        &.is-using {
            color: var(--gray-0);
            background-color: var(--success);
        }
    }
}
</style>
