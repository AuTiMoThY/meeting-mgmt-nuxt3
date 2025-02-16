<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import AuModal from "~/components/AuModal/AuModal.vue";
import { meetingDateDs } from "~/data/meetingDateDs";
import { peopleDs } from "~/data/peopleDs";
useHead({
    title: "會議管理"
});
const router = useRouter();

const imgPath = useConfig().imgPath;

const meetingDate = ref({
    columns: meetingDateDs.columns,
    data: meetingDateDs.data.map((item) => ({
        ...item,
        people: item.peopleList.length,
        time: `${item.timeStart} - ${item.timeEnd}`,
        isRemoving: false,
        roomName: item.room.room
    }))
});

const searchKeyword = ref("");
const currentPage = ref(1);
const { isViewData, viewData, openView, closeView } = useViewData();
// const viewData = ref({
//     name: "會議名稱",
//     room: "A會議室",
//     datetime: "2024/08/15 13:00",
//     people: {
//         columns: peopleDs.columns.filter((col) => col.name !== "operate"),
//         data: peopleDs.data
//     }
// });

// 定義刪除處理函數
const handleDeleteMeeting = async (deleteData) => {
    // 找到要刪除的項目索引
    const index = meetingDate.value.data.findIndex((item) => item.id === deleteData.id);
    if (index === -1) return;

    // 設置移除動畫標記
    meetingDate.value.data[index].isRemoving = true;

    // 等待動畫完成後再實際移除資料
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 移除資料
    meetingDate.value.data = meetingDate.value.data.filter((item) => item.id !== deleteData.id);
};

const {
    isOpen: isOpenDelete,
    data: deleteData,
    openDelete,
    closeDelete,
    handleDelete
} = useDeleteModal(handleDeleteMeeting);
const handleOperation = (operation, rowData) => {
    console.log("Main Program: Received operation", operation, rowData);
    // 根據操作類型和行數據執行相應的邏輯
    switch (operation) {
        case "view":
            console.log("Viewing: ", rowData);
            openView({
                ...rowData,
                datetime: `${rowData.date} ${rowData.timeStart} - ${rowData.timeEnd}`,
                people: {
                    columns: peopleDs.columns.filter((col) => col.name !== "operate"),
                    data: rowData.peopleList
                }
            });

            break;
        case "edit":
            console.log("Editing: ", rowData);
            // return;
            // // 跳轉到編輯頁面
            router.push({
                path: "/date/edit",
                query: { id: rowData.id }
            });
            break;
        case "delete":
            console.log("Deleting: ", rowData);
            openDelete(rowData);
            break;
    }
};
const handleAddMeeting = () => {
    router.push("/date/edit");
};
</script>
<template>
    <main class="page_main page-date">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">會議管理</h1>
                <button class="btn-add-date reset-btn" @click="handleAddMeeting">
                    <AuBtn
                        class="au_btn-float"
                        txt="新增會議"
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
                        <AuBtn txt="所有" class="active"></AuBtn>
                        <AuBtn txt="今日"></AuBtn>
                        <AuBtn txt="本週"></AuBtn>
                        <AuBtn txt="本月"></AuBtn>
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
                        <MeetingDateTable
                            :columns="meetingDate.columns"
                            :data="meetingDate.data"
                            @operation="handleOperation"></MeetingDateTable>
                    </template>
                </AuPanel>
            </div>

            <div class="page_main-ft">
                <AuPagination :total-page="5" :current-page="currentPage"></AuPagination>
            </div>
        </div>
        <AuModal v-if="isViewData" class="view_data" @close="closeView">
            <template #hd>
                <div class="title">{{ viewData.name }}</div>
                <div class="meeting-info">
                    <span class="room">{{ viewData.roomName }}</span>
                    <span class="datetime">{{ viewData.datetime }}</span>
                </div>
            </template>
            <template #bd>
                <div class="title">與會人員</div>
                <ViewPeopleTable
                    :columns="viewData.people.columns"
                    :data="viewData.people.data"></ViewPeopleTable>
            </template>
        </AuModal>
        <AuModal
            v-if="isOpenDelete"
            modal-type="delete"
            @close="closeDelete"
            @delete="handleDelete">
            <template #deleteName>{{ deleteData?.name }}</template>
        </AuModal>
    </main>
</template>
<style lang="scss" scoped>
.page_main-bd {
    gap: 24px;
}
</style>
