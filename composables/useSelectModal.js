export const useSelectModal = () => {
    const isOpen = ref(false);
    const data = ref(null);

    const openModal = (rowData) => {
        isOpen.value = true;
    };

    const closeModal = () => {
        isOpen.value = false;
    };

    return {
        isOpen,
        data,
        openModal,
        closeModal
    };
};
