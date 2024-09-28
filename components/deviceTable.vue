<script setup>
import TextCell from "~/components/AuDatatable/cell/TextCell.vue";
import PowerCell from "~/components/AuDatatable/cell/PowerCell.vue";
import BluetoothCell from "~/components/AuDatatable/cell/BluetoothCell.vue";
import WifiCell from "~/components/AuDatatable/cell/WifiCell.vue";
import OperateCell from "~/components/AuDatatable/cell/OperateCell.vue";

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
        case "power":
            return PowerCell;
        case "bluetooth":
            return BluetoothCell;
        case "wifi":
            return WifiCell;
        case "operate":
            return OperateCell;
        default:
            return TextCell;
    }
};
</script>

<template>
    <div class="au_datatable grid-table abnormal_equipment__datatable">
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 62px;
}
</style>
