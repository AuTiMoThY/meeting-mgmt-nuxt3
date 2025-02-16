<script setup>
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const imgPath = config.public.imgPath;

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const navData = [
    {
        group: "會議相關",
        list: [
            {
                title: "會議管理",
                icon: `${imgPath}icons/date.svg`,
                link: "/date",
                name: "date"
            },
            {
                title: "會議室管理",
                icon: `${imgPath}icons/room.svg`,
                link: "/room",
                name: "room"
            }
        ]
    },
    {
        group: "設備相關",
        list: [
            {
                title: "設備管理",
                icon: `${imgPath}icons/device.svg`,
                link: "/device",
                name: "device"
            },
            {
                title: "內容管理",
                icon: `${imgPath}icons/content.svg`,
                link: "/content",
                name: "content"
            }
        ]
    },
    {
        group: "人員相關",
        list: [
            {
                title: "人員管理",
                icon: `${imgPath}icons/people.svg`,
                link: "/people",
                name: "people"
            }
        ]
    }
];

const isCurrentRoute = (itemLink) => {
    const currentPath = route.path.slice(1);
    const navPath = itemLink.slice(1);

    return currentPath.startsWith(navPath);
};

const { logOut } = useAuthStore();
const { isOpenLogout, openLogout, closeLogout } = useLogoutModal();

const handleLogout = () => {
    openLogout();
};

const confirmLogout = () => {
    logOut();
    router.push("/login");
    closeLogout();
};
</script>
<template>
    <aside class="site_aside" :class="{ 'js-open': isOpen }">
        <div class="site_aside-inner">
            <div class="site_aside-hd">
                <NuxtLink to="/" class="inner">
                    <h1 class="site_name">會議管理系統</h1>
                </NuxtLink>
            </div>
            <div class="site_aside-bd">
                <nav class="site_nav">
                    <div v-for="(group, index) in navData" :key="index" class="site_nav-group">
                        <div class="group-title">{{ group.group }}</div>
                        <ul class="site_nav-list">
                            <li
                                v-for="(item, itemIndex) in group.list"
                                :key="itemIndex"
                                class="site_nav-item"
                                :class="{ 'is-active': isCurrentRoute(item.link) }">
                                <NuxtLink :to="item.link" class="site_nav-link">
                                    <span class="icon">
                                        <AuImg :default-src="item.icon"></AuImg>
                                    </span>
                                    <span class="text">{{ item.title }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="site_aside-ft">
                <div class="account-connect">
                    <div class="label">管理員(科技創新有限公司)您好</div>
                    <div class="label">連結中帳號</div>
                    <div class="email">ABC1234@gmail.com</div>
                    <AuBtn
                        class="au_btn-effecy"
                        txt="登出"
                        type="button"
                        @click="handleLogout"></AuBtn>
                </div>
            </div>
            <div class="version font-note">ver.20250116</div>
        </div>
    </aside>
    <AuModal v-if="isOpenLogout" modal-type="logout" @close="closeLogout" @logout="confirmLogout">
    </AuModal>
</template>
