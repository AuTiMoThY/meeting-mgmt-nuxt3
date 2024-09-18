<script setup>
import { todayMeetingDs } from "~/data/todayMeetingDs";
import { abnormalEquipmentDs } from "~/data/abnormalEquipmentDs";
const todayMeeting = reactive({
    columns: todayMeetingDs.columns,
    data: todayMeetingDs.data
});

const abnormalEquipment = reactive({
    columns: abnormalEquipmentDs.columns,
    data: abnormalEquipmentDs.data
});

const config = useRuntimeConfig();
const imgPath = config.public.imgPath;

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
                        <div class="au_datatable grid-table today_meeting__datatable">
                            <div class="au_datatable-heading grid-tablerow">
                                <div
                                    v-for="(col, index) in todayMeeting.columns"
                                    :key="index"
                                    class="au_datatable-td grid-cell"
                                    :class="col.name">
                                    {{ col.label }}
                                </div>
                            </div>
                            <div
                                v-for="(row, index) in todayMeeting.data"
                                :key="index"
                                class="au_datatable-data grid-tablerow">
                                <div
                                    v-for="(col, c_index) in todayMeeting.columns"
                                    :key="c_index"
                                    class="au_datatable-td grid-cell"
                                    :class="todayMeeting.columns[c_index].name"
                                    :data-th="todayMeeting.columns[c_index].label">
                                    <template v-if="col.name === 'time'">
                                        <span class="txt">{{ row.time }}</span>
                                    </template>
                                    <template v-if="col.name === 'name'">
                                        <span class="txt">{{ row.name }}</span>
                                    </template>
                                    <template v-if="col.name === 'people'">
                                        <span class="txt">{{ row.people }}位</span>
                                    </template>
                                    <template v-if="col.name === 'room'">
                                        <span class="txt">{{ row.room }}</span>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                </AuPanel>
                <AuPanel class="abnormal_equipment">
                    <template #hd>
                        <div class="title">異常設備</div>
                    </template>
                    <template #bd>
                        <div class="au_datatable grid-table abnormal_equipment__datatable">
                            <div class="au_datatable-heading grid-tablerow">
                                <div
                                    v-for="(col, index) in abnormalEquipment.columns"
                                    :key="index"
                                    class="au_datatable-td grid-cell"
                                    :class="col.name">
                                    {{ col.label }}
                                </div>
                            </div>
                            <div
                                v-for="(row, index) in abnormalEquipment.data"
                                :key="index"
                                class="au_datatable-data grid-tablerow">
                                <div
                                    v-for="(col, c_index) in abnormalEquipment.columns"
                                    :key="c_index"
                                    class="au_datatable-td grid-cell"
                                    :class="abnormalEquipment.columns[c_index].name"
                                    :data-th="abnormalEquipment.columns[c_index].label">
                                    <template v-if="col.name === 'name'">
                                        <span class="txt">{{ row.name }}</span>
                                    </template>
                                    <template v-if="col.name === 'type'">
                                        <span class="txt">{{ row.type }}</span>
                                    </template>
                                    <template v-if="col.name === 'power'">
                                        <span class="txt" :class="{ 'txt-red': row.power <= 20 }">
                                            {{ row.power }}%
                                        </span>
                                    </template>
                                    <template v-if="col.name === 'bluetooth'">
                                        <span
                                            class="txt"
                                            :class="{ 'txt-red': row.bluetooth == 0 }">
                                            {{ row.bluetooth == 0 ? "OFF" : "ON" }}
                                        </span>
                                    </template>
                                    <template v-if="col.name === 'wifi'">
                                        <span class="txt" :class="{ 'txt-red': row.wifi == 0 }">
                                            {{ row.wifi == 0 ? "OFF" : "ON" }}
                                        </span>
                                    </template>
                                    <template
                                        v-if="abnormalEquipment.columns[c_index].name == 'operate'">
                                        <AuImg
                                            class="icon-operate"
                                            :default-src="`${imgPath}icons/more.svg`"></AuImg>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                </AuPanel>
            </div>
        </div>
    </main>
</template>
<style lang="scss"></style>
