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
const emit = defineEmits(["operation"]);
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

const handleOperationEmit = (operation, rowData) => {
    console.log("MeetingDateTable: Received operation", operation, rowData);
    emit("operation", operation, rowData);
};
</script>
<template>
    <div class="au_datatable grid-table meeting_date__datatable">
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
                <component
                    :is="getCellComponent(col.name)"
                    :row="row"
                    :col="col"
                    @operation="handleOperationEmit"></component>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.grid-tablerow {
    grid-template-columns: 120px 120px 1fr 40px 100px 62px;

    .people,
    .room {
        text-align: right;
    }
}
</style>
