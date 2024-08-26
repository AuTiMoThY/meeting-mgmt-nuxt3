<script setup>
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
                link: "/date"
            },
            {
                title: "會議室管理",
                icon: `${imgPath}icons/room.svg`,
                link: "/room"
            }
        ]
    },
    {
        group: "設備相關",
        list: [
            {
                title: "設備管理",
                icon: `${imgPath}icons/device.svg`,
                link: "/device"
            },
            {
                title: "內容管理",
                icon: `${imgPath}icons/content.svg`,
                link: "/content"
            }
        ]
    },
    {
        group: "人員相關",
        list: [
            {
                title: "人員管理",
                icon: `${imgPath}icons/people.svg`,
                link: "/people"
            }
        ]
    }
];
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
                    <div class="site_nav-group" v-for="(group, index) in navData" :key="index">
                        <div class="group-title">{{ group.group }}</div>
                        <ul class="site_nav-list">
                            <li
                                class="site_nav-item"
                                v-for="(item, index) in group.list"
                                :key="index">
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
                    <div class="label">連結中帳號</div>
                    <div class="email">ABC1234@gmail.com</div>
                </div>
            </div>
        </div>
    </aside>
</template>
