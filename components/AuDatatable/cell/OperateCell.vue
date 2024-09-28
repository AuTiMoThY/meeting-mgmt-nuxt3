<script setup>
const config = useRuntimeConfig();
const imgPath = config.public.imgPath;

const props = defineProps({
    row: {
        type: Object,
        required: true
    },
    col: {
        type: Object,
        required: true
    }
});
const emit = defineEmits(["operation"]);

const isMenuOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (event) => {
    if (menuRef.value && !menuRef.value.contains(event.target)) {
        isMenuOpen.value = false;
    }
};

const handleOperation = (operation) => {
    console.log("OperateCell: Emitting operation", operation, props.row);
    emit("operation", operation, props.row);
    isMenuOpen.value = false;
};

onMounted(() => {
    document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
    document.removeEventListener("click", closeMenu);
});
</script>
<template>
    <div ref="menuRef" class="au_datatable-operate">
        <AuImg
            class="icon-operate"
            :default-src="`${imgPath}icons/more.svg`"
            @click="toggleMenu"></AuImg>
        <div v-show="isMenuOpen" class="operate_menu">
            <button class="operate_menu-btn reset-btn" @click="handleOperation('view')">
                <AuImg
                    class="icon"
                    :default-src="`${imgPath}icons/view.svg`"
                    :hover-src="`${imgPath}icons/view-hover.svg`"></AuImg>
                <div class="txt">查看</div>
            </button>
            <button class="operate_menu-btn reset-btn" @click="handleOperation('edit')">
                <AuImg
                    class="icon"
                    :default-src="`${imgPath}icons/edit.svg`"
                    :hover-src="`${imgPath}icons/edit-hover.svg`"></AuImg>
                <div class="txt">編輯</div>
            </button>
            <button class="operate_menu-btn reset-btn" @click="handleOperation('delete')">
                <AuImg
                    class="icon"
                    :default-src="`${imgPath}icons/delete.svg`"
                    :hover-src="`${imgPath}icons/delete-hover.svg`"></AuImg>
                <div class="txt">刪除</div>
            </button>
        </div>
    </div>
</template>
