<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import RcxField from "~/components/FrmField/RcxField.vue";
// import { imgPath } from "~/utils/config.js";

import { roomDs } from "~/data/roomDs";
const room = ref(roomDs);
console.log(room.value);

const searchKeyword = ref("");
const currentPage = ref(1);
const isShowIdle = ref(false);

const handleOperation = (operation, rowData) => {
    console.log("Main Program: Received operation", operation, rowData);
    // 根據操作類型和行數據執行相應的邏輯
    switch (operation) {
        case "view":
            console.log("Viewing: ", rowData);
            break;
        case "edit":
            console.log("Editing: ", rowData);
            break;
        case "delete":
            console.log("Deleting: ", rowData);
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
                            label="僅顯示閒置會議室"
                            rcx-id="checkboxOnlyIdle"
                            v-model="isShowIdle"></RcxField>
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
    </main>
</template>
