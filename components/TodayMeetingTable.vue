<!-- TodayMeetingTable.vue -->
<script setup>
// import { defineProps, toRefs } from "vue";
import TextCell from "~/components/AuDatatable/cell/TextCell.vue";
import PeopleCell from "~/components/AuDatatable/cell/PeopleCell.vue";

const props = defineProps({
    columns: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: true
    }
});

const { columns, data } = toRefs(props);

const getCellComponent = (columnName) => {
    switch (columnName) {
        case "people":
            return PeopleCell;
        default:
            return TextCell;
    }
};
</script>

<template>
    <div class="au_datatable grid-table today_meeting__datatable">
        <div class="au_datatable-heading grid-tablerow">
            <div
                v-for="(col, index) in columns"
                :key="index"
                class="au_datatable-td grid-cell"
                :class="col.name">
                {{ col.label }}
            </div>
        </div>
        <div v-for="(row, index) in data" :key="index" class="au_datatable-data grid-tablerow">
            <div
                v-for="(col, c_index) in columns"
                :key="c_index"
                class="au_datatable-td grid-cell"
                :class="columns[c_index].name"
                :data-th="columns[c_index].label">
                <component :is="getCellComponent(col.name)" :row="row" :col="col"></component>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-tablerow {
    grid-template-columns: 120px 1fr 40px 100px;
    .grid-cell {
        &.people {
            text-align: right;
        }
        &.room {
            text-align: right;
        }
    }
}
</style>
