<script setup>
import { todayMeetingDs } from "~/data/todayMeetingDs";
import { deviceDs } from "~/data/deviceDs";
const todayMeeting = ref(todayMeetingDs);

definePageMeta({
    middleware: "auth"
});

// 新增計算屬性來篩選異常設備
const abnormalEquipment = computed(() => {
    return {
        columns: deviceDs.columns,
        data: deviceDs.data.filter(
            (device) => device.power <= 20 || device.bluetooth === 0 || device.wifi === 0
        )
    };
});

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
onMounted(() => {});

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
    </main>
</template>
<style lang="scss"></style>
