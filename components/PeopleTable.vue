<script setup>
import TextCell from "~/components/AuDatatable/cell/TextCell.vue";
import OperateCell from "~/components/AuDatatable/cell/OperateCell.vue";
// import OperateCellNoView from "~/components/AuDatatable/cell/OperateCellNoView.vue";

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
        case "operate":
            return OperateCell;
        default:
            return TextCell;
    }
};

const handleOperationEmit = (operation, rowData) => {
    console.log("PeopleTable: Received operation", operation, rowData);
    emit("operation", operation, rowData);
};
</script>
<template>
    <div class="au_datatable grid-table people__datatable">
        <div class="au_datatable-heading grid-tablerow">
            <div
                v-for="(col, index) in columns"
                :key="index"
                class="au_datatable-td grid-cell"
                :class="col.name">
                {{ col.label }}
            </div>
        </div>
        <div
            v-for="(row, index) in data"
            :key="index"
            class="au_datatable-data grid-tablerow"
            :class="{ removing: row.isRemoving }">
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
                    :show-view-button="false"
                    @operation="handleOperationEmit"></component>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.grid-tablerow {
    grid-template-columns: 1fr 1fr 1fr 1fr 62px;
}
</style>
