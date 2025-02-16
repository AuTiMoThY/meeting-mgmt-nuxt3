export const useLogoutModal = () => {
    const isOpenLogout = ref(false);

    const openLogout = () => {
        isOpenLogout.value = true;
    };

    const closeLogout = () => {
        isOpenLogout.value = false;
    };

    return {
        isOpenLogout,
        openLogout,
        closeLogout
    };
};
