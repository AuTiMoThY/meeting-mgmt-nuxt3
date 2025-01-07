export const useViewData = () => {
    const isViewData = ref(false);
    const viewData = ref(null);

    const openView = (data) => {
        viewData.value = data;
        isViewData.value = true;
    };

    const closeView = () => {
        isViewData.value = false;
        viewData.value = null;
    };

    return {
        isViewData,
        viewData,
        openView,
        closeView
    };
};
