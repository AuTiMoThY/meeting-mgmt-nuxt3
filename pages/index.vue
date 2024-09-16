<script setup>
import { todayMeetingDs } from "~/data/todayMeetingDs";
const tableColumns = ref(todayMeetingDs.tableColumns);
const tableData = ref(todayMeetingDs.tableData);
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
                                    v-for="(col, index) in tableColumns"
                                    :key="index"
                                    class="au_datatable-td grid-cell"
                                    :class="col.name">
                                    {{ col.label }}
                                </div>
                            </div>
                            <div
                                v-for="(row, index) in tableData"
                                :key="index"
                                class="au_datatable-data grid-tablerow">
                                <div
                                    v-for="(col, index) in tableColumns"
                                    :key="index"
                                    class="au_datatable-td grid-cell"
                                    :class="tableColumns[index].name"
                                    :data-th="tableColumns[index].label">
                                    <template v-if="col.name === 'time'">
                                        {{ row.time }}
                                    </template>
                                    <template v-else-if="col.name === 'name'">
                                        {{ row.name }}
                                    </template>
                                    <template v-else-if="col.name === 'people'">
                                        {{ row.people }}位
                                    </template>
                                    <template v-else-if="col.name === 'room'">
                                        {{ row.room }}位
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
