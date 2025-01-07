<script setup>
import PowerTxt from "~/components/AuDatatable/cell/PowerTxt.vue";
import BluetoothTxt from "~/components/AuDatatable/cell/BluetoothTxt.vue";
import WifiTxt from "~/components/AuDatatable/cell/WifiTxt.vue";
import { todayMeetingDs } from "~/data/todayMeetingDs";
import { deviceDs } from "~/data/deviceDs";
const device = ref(deviceDs);
const todayMeeting = ref(todayMeetingDs);

// const token = useCookie("token");
// definePageMeta({
//     middleware: "auth"
// });

const isViewData = ref(false);
const viewData = ref(null);

// 新增計算屬性來篩選異常設備
const abnormalEquipment = computed(() => {
    return {
        columns: device.value.columns,
        data: device.value.data.filter(
            (device) => device.power <= 20 || device.bluetooth === 0 || device.wifi === 0
        )
    };
});

// 定義刪除處理函數
const handleDeleteDevice = async (deleteData) => {
    console.log("handleDeleteDevice: ", deleteData);
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
onMounted(() => {
    // console.log(token);
});

onUnmounted(() => {});
</script>
<template>
    <main class="page_main page-home">
        <div class="container">
            <div class="page_main-bd">
                <AuPanel class="today_meeting">
                    <template #hd>
                        <div class="title">今日會議</div>
                    </template>
                    <template #bd>
                        <TodayMeetingTable
                            :columns="todayMeeting.columns"
                            :data="todayMeeting.data"></TodayMeetingTable>
                    </template>
                </AuPanel>
                <AuPanel class="abnormal_equipment">
                    <template #hd>
                        <div class="title">異常設備</div>
                    </template>
                    <template #bd>
                        <AbnormalEquipmentTable
                            :columns="abnormalEquipment.columns"
                            :data="abnormalEquipment.data"
                            @operation="handleOperation"></AbnormalEquipmentTable>
                    </template>
                </AuPanel>
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
<style lang="scss"></style>
