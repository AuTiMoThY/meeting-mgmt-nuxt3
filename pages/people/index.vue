<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import DropdownField from "~/components/FrmField/DropdownField.vue";

import { peopleDs } from "~/data/peopleDs";
const people = ref(peopleDs);

const imgPath = useConfig().imgPath;

const searchKeyword = ref("");
const currentPage = ref(1);
const currentType = ref(0);
const typeOptions = ref(["全部", "內部", "來賓"]);

// 定義刪除處理函數
const handleDeletePeople = async (deleteData) => {
    // 找到要刪除的項目索引
    const index = people.value.data.findIndex((item) => item.id === deleteData.id);
    if (index === -1) return;

    // 設置移除動畫標記
    people.value.data[index].isRemoving = true;

    // 等待動畫完成後再實際移除資料
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 移除資料
    people.value.data = people.value.data.filter((item) => item.id !== deleteData.id);
};

const {
    isOpen: isOpenDelete,
    data: deleteData,
    openDelete,
    closeDelete,
    handleDelete
} = useDeleteModal(handleDeletePeople);

const handleOperation = (operation, rowData) => {
    console.log("Main Program: Received operation", operation, rowData);
    // 根據操作類型和行數據執行相應的邏輯
    switch (operation) {
        case "edit":
            console.log("Editing: ", rowData);
            break;
        case "delete":
            console.log("Deleting: ", rowData);
            openDelete(rowData);

            break;
    }
};

const handleTypeChange = (newType) => {
    currentType.value = newType;
    console.log("currentType", currentType.value);
};

const filteredPeopleData = computed(() => {
    if (currentType.value === 0) {
        return people.value.data;
    }
    return people.value.data.filter((item) => item.type === currentType.value);
});
</script>
<template>
    <main class="page_main page-date">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">人員管理</h1>
                <button class="btn-add-date reset-btn">
                    <AuBtn
                        class="au_btn-float"
                        txt="新增人員"
                        style="--txt-color: var(--primary-5); --bd-color: transparent">
                        <template #icon-prepend>
                            <AuImg :default-src="`${imgPath}icons/add.svg`"></AuImg>
                        </template>
                    </AuBtn>
                </button>
            </div>
            <div class="page_main-bd">
                <div class="conditional-bar">
                    <div class="conditional-bar-filter">
                        <DropdownField
                            label="人員類型"
                            :options="typeOptions"
                            :current-selected="currentType"
                            @update:current-selected="handleTypeChange"></DropdownField>
                    </div>
                    <div class="conditional-bar-search">
                        <div class="search-field">
                            <InputField
                                id="searchKeyword"
                                v-model="searchKeyword"
                                class="frm_field-v frm_field-no-border"
                                label=""
                                placeholder="搜尋..."></InputField>
                            <AuBtn class="search-btn">
                                <template #bg>
                                    <AuImg :default-src="`${imgPath}icons/search.svg`"></AuImg>
                                </template>
                            </AuBtn>
                        </div>
                    </div>
                </div>
                <AuPanel class="meeting_date">
                    <template #bd>
                        <PeopleTable
                            :columns="people.columns"
                            :data="filteredPeopleData"
                            @operation="handleOperation"></PeopleTable>
                    </template>
                </AuPanel>
            </div>

            <div class="page_main-ft">
                <AuPagination :total-page="5" :current-page="currentPage"></AuPagination>
            </div>
        </div>
        <AuModal
            v-if="isOpenDelete"
            modal-type="delete"
            @close="closeDelete"
            @delete="handleDelete">
            <template #deleteName>{{ deleteData?.name }}</template>
        </AuModal>
    </main>
</template>
