export const useMenuStore = defineStore("menu", () => {
    const isOpen = ref(false);
    const toggleMenu = () => {
        isOpen.value = !isOpen.value;
    };

    return {
        isOpen,
        toggleMenu
    };
});
