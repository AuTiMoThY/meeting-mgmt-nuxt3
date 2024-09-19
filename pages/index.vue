<script setup>
import { todayMeetingDs } from "~/data/todayMeetingDs";
import { abnormalEquipmentDs } from "~/data/abnormalEquipmentDs";
const todayMeeting = ref(todayMeetingDs);
const abnormalEquipment = ref(abnormalEquipmentDs);

definePageMeta({
    middleware: "auth"
});
onMounted(() => {});

onUnmounted(() => {});
</script>
<template>
    <main class="page_main page-home">
        <div class="container">
            <div class="page_main-body">
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
                            :data="abnormalEquipment.data"></AbnormalEquipmentTable>
                    </template>
                </AuPanel>
            </div>
        </div>
    </main>
</template>
<style lang="scss"></style>
