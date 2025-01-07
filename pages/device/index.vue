<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import RcxField from "~/components/FrmField/RcxField.vue";
import PowerTxt from "~/components/AuDatatable/cell/PowerTxt.vue";
import BluetoothTxt from "~/components/AuDatatable/cell/BluetoothTxt.vue";
import WifiTxt from "~/components/AuDatatable/cell/WifiTxt.vue";

import { deviceDs } from "~/data/deviceDs";
const device = ref(deviceDs);

const imgPath = useConfig().imgPath;

const searchKeyword = ref("");
const currentPage = ref(1);
const isShowAbnormal = ref(false);

const isViewData = ref(false);
const viewData = ref(null);
// const viewData = ref({
//     name: "設備名稱A",
//     type: "桌牌",
//     power: 100,
//     bluetooth: 1,
//     wifi: 0,
//     number: "A-91"
// });

// 定義刪除處理函數
const handleDeleteDevice = async (deleteData) => {
    // 找到要刪除的項目索引
    const index = device.value.data.findIndex((item) => item.id === deleteData.id);
    if (index === -1) return;

    // 設置移除動畫標記
    device.value.data[index].isRemoving = true;

    // 等待動畫完成後再實際移除資料
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 移除資料
    device.value.data = device.value.data.filter((item) => item.id !== deleteData.id);
};

const {
    isOpen: isOpenDelete,
    data: deleteData,
    openDelete,
    closeDelete,
    handleDelete
} = useDeleteModal(handleDeleteDevice);

const handleOperation = (operation, rowData) => {
    console.log("Main Program: Received operation", operation, rowData);
    // 根據操作類型和行數據執行相應的邏輯
    switch (operation) {
        case "view":
            console.log("Viewing: ", rowData);
            viewData.value = rowData;
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
                            v-model="isShowAbnormal"
                            label="僅顯示異常設備"
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
        <AuModal v-if="isViewData" class="view_data" @close="isViewData = false">
            <template #hd>
                <div class="title">
                    {{ viewData.name }}
                </div>
            </template>
            <template #bd>
                <div class="view-device-table">
                    <div class="table-row">
                        <div class="table-cell title">類型</div>
                        <div class="table-cell content">{{ viewData.type }}</div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell title">電量</div>
                        <div class="table-cell content">
                            <PowerTxt :txt="viewData.power"></PowerTxt>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell title">藍芽</div>
                        <div class="table-cell content">
                            <BluetoothTxt :txt="viewData.bluetooth"></BluetoothTxt>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell title">Wi-Fi</div>
                        <div class="table-cell content">
                            <WifiTxt :txt="viewData.wifi"></WifiTxt>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell title">設備編號</div>
                        <div class="table-cell content">{{ viewData.number }}</div>
                    </div>
                </div>
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
