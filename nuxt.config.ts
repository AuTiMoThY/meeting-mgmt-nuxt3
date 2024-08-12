// https://nuxt.com/docs/api/configuration/nuxt-config
const basePath = process.env.BASE_PATH || "/";

export default defineNuxtConfig({
    compatibilityDate: "2024-08-02",
    devtools: { enabled: true },
    devServer: {
        port: 8081
    },
    modules: ["@pinia/nuxt"],
    app: {
        baseURL: basePath,
        // buildAssetsDir: "/assets/"
        head: {
            link: [],
            style: [],
            script: [
                // {
                //     src: `${basePath}assets/js/TwTempCore.js`,
                //     async: true,
                //     body: true
                // },
            ],
            noscript: []
        }
    },
    css: ["~/assets/scss/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/scss/_core.scss";`
                }
            }
        }
    },
    runtimeConfig: {
        public: {
            basePath,
            imgPath: `${basePath}assets/images/`,
            jsPath: `${basePath}assets/js/`
        }
    }
});
