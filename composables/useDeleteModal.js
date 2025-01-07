export const useDeleteModal = (onDelete) => {
    const isOpen = ref(false);
    const data = ref(null);

    const openDelete = (rowData) => {
        isOpen.value = true;
        data.value = rowData;
        console.log("data", rowData);
    };

    const closeDelete = () => {
        isOpen.value = false;
        data.value = null;
    };

    const handleDelete = async () => {
        console.log("handleDelete", data.value);
        if (!data.value) return;

        isOpen.value = false;

        // 如果有傳入自定義的刪除處理函數，則執行它
        if (typeof onDelete === "function") {
            await onDelete(data.value);
        }

        // closeDelete();
    };

    return {
        isOpen,
        data,
        openDelete,
        closeDelete,
        handleDelete
    };
};
