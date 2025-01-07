<script setup>
import InputField from "~/components/FrmField/InputField.vue";
import DropdownField from "~/components/FrmField/DropdownField.vue";

import { contentDs } from "~/data/contentDs";
const content = ref(contentDs);

const imgPath = useConfig().imgPath;

const searchKeyword = ref("");
const currentPage = ref(1);
const currentType = ref(0);
const typeOptions = ref(["全部", "桌牌", "門牌", "迎賓牌"]);

const isViewData = ref(false);
const viewData = ref(null);
// const viewData = ref({
//     name: "內容A",
//     preview: `${imgPath}content-1-1.jpg`
// });

// 定義刪除處理函數
const handleDeleteContent = async (deleteData) => {
    // 找到要刪除的項目索引
    const index = content.value.data.findIndex((item) => item.id === deleteData.id);
    if (index === -1) return;

    // 設置移除動畫標記
    content.value.data[index].isRemoving = true;

    // 等待動畫完成後再實際移除資料
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 移除資料
    content.value.data = content.value.data.filter((item) => item.id !== deleteData.id);
};

const {
    isOpen: isOpenDelete,
    data: deleteData,
    openDelete,
    closeDelete,
    handleDelete
} = useDeleteModal(handleDeleteContent);

const handleOperation = (operation, rowData) => {
    console.log("Main Program: Received operation", operation, rowData);
    // 根據操作類型和行數據執行相應的邏輯
    switch (operation) {
        case "view":
            console.log("Viewing: ", rowData);
            viewData.value = {
                name: rowData.name,
                preview: (() => {
                    switch (rowData.can_use_device) {
                        case "桌牌":
                            return `${imgPath}content-1-1.jpg`;
                        case "門牌":
                            return `${imgPath}content-2-1.jpg`;
                        case "迎賓牌":
                            return `${imgPath}content-3-1.jpg`;
                        default:
                            return `${imgPath}content-1-1.jpg`;
                    }
                })()
            };
            isViewData.value = true;
            break;
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
};

const filteredContentData = computed(() => {
    if (currentType.value === 0) {
        return content.value.data;
    }
    return content.value.data.filter(
        (item) => item.can_use_device === typeOptions.value[currentType.value]
    );
});
</script>
<template>
    <main class="page_main page-date">
        <div class="container">
            <div class="page_main-hd">
                <h1 class="title">內容管理</h1>
                <button class="btn-add-date reset-btn">
                    <AuBtn
                        class="au_btn-float"
                        txt="新增內容"
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
                            label="設備類型"
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
                        <ContentTable
                            :columns="content.columns"
                            :data="filteredContentData"
                            @operation="handleOperation"></ContentTable>
                    </template>
                </AuPanel>
            </div>

            <div class="page_main-ft">
                <AuPagination :total-page="5" :current-page="currentPage"></AuPagination>
            </div>
        </div>

        <AuModal v-if="isViewData" class="view_data" @close="isViewData = false">
            <template #hd>
                <div class="title">{{ viewData.name }}</div>
            </template>
            <template #bd>
                <AuImg :default-src="viewData.preview"></AuImg>
            </template>
        </AuModal>
        <AuModal
            v-if="isOpenDelete"
            modal-type="delete"
            @close="closeDelete"
            @delete="handleDelete">
            <template #deleteName>{{ deleteData?.name }}</template>
        </AuModal>
    </main>
</template>
