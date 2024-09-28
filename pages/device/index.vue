<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import RcxField from "~/components/FrmField/RcxField.vue";
// import { imgPath } from "~/utils/config.js";

import { deviceDs } from "~/data/deviceDs";
const device = ref(deviceDs);

const searchKeyword = ref("");
const currentPage = ref(1);
const isShowAbnormal = ref(false);

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

const filteredDeviceData = computed(() => {
    if (isShowAbnormal.value) {
        return device.value.data.filter(
            (device) => device.power <= 20 || device.bluetooth === 0 || device.wifi === 0
        );
    }
    return device.value.data;
});
</script>
<template>
    <main class="page_main page-date">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">設備管理</h1>
                <button class="btn-add-date reset-btn">
                    <AuBtn
                        class="au_btn-float"
                        txt="新增設備"
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
                            label="僅顯示異常設備"
                            rcx-id="checkboxOnlyIdle"
                            v-model="isShowAbnormal"></RcxField>
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
                        <DeviceTable
                            :columns="device.columns"
                            :data="filteredDeviceData"
                            @operation="handleOperation"></DeviceTable>
                    </template>
                </AuPanel>
            </div>

            <div class="page_main-ft">
                <AuPagination :total-page="5" :current-page="currentPage"></AuPagination>
            </div>
        </div>
    </main>
</template>
