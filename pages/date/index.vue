<script setup>
import InputField from "~/components/FrmField/InputField.vue";

import { meetingDateDs } from "~/data/meetingDateDs";
const meetingDate = ref(meetingDateDs);

const config = useRuntimeConfig();
const imgPath = config.public.imgPath;

const searchKeyword = ref("");

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
                <h1 class="title">會議管理</h1>
                <button class="btn-add-date reset-btn">
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
                <AuPagination :total-page="5"></AuPagination>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.page_main-bd {
    gap: 24px;
}
</style>
