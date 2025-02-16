<script setup>
// import { useRoute, useRouter } from "vue-router";
import InputField from "~/components/FrmField/InputField.vue";
import SelectField from "~/components/FrmField/SelectField.vue";
import TextCell from "~/components/AuDatatable/cell/TextCell.vue";
import PowerCell from "~/components/AuDatatable/cell/PowerCell.vue";
import BluetoothCell from "~/components/AuDatatable/cell/BluetoothCell.vue";
import WifiCell from "~/components/AuDatatable/cell/WifiCell.vue";
import CheckboxCell from "~/components/AuDatatable/cell/CheckboxCell.vue";
import { contentDs } from "~/data/contentDs";
import { meetingDateDs } from "~/data/meetingDateDs";
import { deviceDs } from "~/data/deviceDs";
const route = useRoute();
const router = useRouter();

const imgPath = useConfig().imgPath;

const dataId = ref(Number(route.query.id) || null);

useHead({
    title: computed(() => (dataId.value ? "編輯內容" : "新增內容"))
});

const getCellComponent = (columnName) => {
    switch (columnName) {
        case "checkbox":
            return CheckboxCell;
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

const contentData = ref({
    id: "",
    name: "",
    can_use_device: {
        id: "",
        name: ""
    },
    applied_device: 0,
    meeting: {
        id: "",
        name: ""
    }
});

const deviceColumns = ref(
    [
        { name: "checkbox", field: "checkbox", label: "" },
        ...deviceDs.columns.filter((item) => item.name !== "operate"),
        { name: "number", field: "number", label: "設備編號" }
    ].sort((a, b) => {
        const order = ["checkbox", "name", "typeName", "number", "power", "bluetooth", "wifi"];
        return order.indexOf(a.name) - order.indexOf(b.name);
    })
);
const deviceData = ref(null);

const isSendIng = ref(false);
const isSendOK = ref(false);

const sendDevice = () => {
    const data = {
        ...contentData.value
    };
    console.log("saveData", data);

    if (dataId.value) {
        // 發送
        isSendIng.value = true;

        // 模擬發送中
        setTimeout(() => {
            isSendIng.value = false;
            isSendOK.value = true;
        }, 1500);
        // 發送成功後，跳轉到內容列表
        setTimeout(() => {
            router.push("/content");
        }, 3000);
    }
};

onMounted(() => {
    if (dataId.value) {
        const foundData = contentDs.data.find((item) => item.id === dataId.value);
        if (foundData) {
            contentData.value = {
                ...foundData
                // ...meetingData
            };
        }
        console.log("contentData", contentData.value);

        deviceData.value = deviceDs.data
            .filter((item) => item.type.id === contentData.value.can_use_device.id)
            .map((item) => ({
                ...item,
                typeName: item.type.name
            }));
        console.log("deviceData", deviceData.value);
    }
});

const selectedDevices = ref(new Set() || 0);

const handleCheckboxChange = ({ id, checked }) => {
    if (checked) {
        selectedDevices.value.add(id);
    } else {
        selectedDevices.value.delete(id);
    }
    console.log("已選擇的設備：", Array.from(selectedDevices.value));
};
</script>
<template>
    <main class="page_main page-edit">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">發送至設備</h1>
                <button class="reset-btn" @click="sendDevice">
                    <AuBtn
                        class="au_btn-float"
                        txt="發送"
                        style="--txt-color: var(--primary-5); --bd-color: transparent">
                        <template #icon-prepend>
                            <AuImg :default-src="`${imgPath}icons/send-hover.svg`"></AuImg>
                        </template>
                    </AuBtn>
                </button>
            </div>
            <div class="page_main-bd">
                <div class="select_device-wrap">
                    <div class="select_device-hd">
                        <div class="title">請勾選設備 ({{ selectedDevices.size }} / 5)</div>
                        <div class="note txt-gray-3">*選擇的設備數量要和與會人員數量一致</div>
                    </div>
                    <AuPanel class="select_device-bd">
                        <template #bd>
                            <div class="au_datatable grid-table device__datatable">
                                <div class="au_datatable-heading grid-tablerow">
                                    <div
                                        v-for="(col, index) in deviceColumns"
                                        :key="index"
                                        class="au_datatable-td grid-cell"
                                        :class="col.name">
                                        {{ col.label }}
                                    </div>
                                </div>
                                <div
                                    v-for="(row, index) in deviceData"
                                    :key="index"
                                    class="au_datatable-data grid-tablerow"
                                    :data-id="row.id">
                                    <div
                                        v-for="(col, c_index) in deviceColumns"
                                        :key="c_index"
                                        class="au_datatable-td grid-cell"
                                        :class="deviceColumns[c_index].name"
                                        :data-th="deviceColumns[c_index].label">
                                        <component
                                            :is="getCellComponent(col.name)"
                                            :row="row"
                                            :col="col"
                                            @update:checked="handleCheckboxChange">
                                        </component>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </AuPanel>
                </div>
            </div>
        </div>
        <AuModal v-if="isSendIng" modal-type="sendIng"></AuModal>
        <AuModal v-if="isSendOK" modal-type="sendOK"></AuModal>
        <!-- <AuModal v-if="isOpenEditOK" modal-type="editOK"></AuModal>
        <AuModal v-if="isOpenAddOK" modal-type="addOK"></AuModal> -->
    </main>
</template>
<style lang="scss">
@import "./send.scss";
</style>
