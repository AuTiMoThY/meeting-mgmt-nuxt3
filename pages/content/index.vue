<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import RcxField from "~/components/FrmField/RcxField.vue";
// import { imgPath } from "~/utils/config.js";

import { contentDs } from "~/data/contentDs";
const content = ref(contentDs);

const searchKeyword = ref("");
const currentPage = ref(1);

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
</script>
<template>
    <main class="page_main page-date">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">內容管理</h1>
                <button class="btn-add-date reset-btn">
                    <AuBtn
                        class="au_btn-float"
                        txt="新增內容"
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
                        <DropdownField
                            label="設備類型"
                            :options="['桌牌', '門牌', '迎賓牌']"
                            :current-selected="currentType"
                            @update:currentSelected="handleTypeChange"></DropdownField>
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
                            :columns="content.columns"
                            :data="content.data"
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
