// https://nuxt.com/docs/api/configuration/nuxt-config
const basePath = process.env.BASE_PATH || "/";

export default defineNuxtConfig({
    compatibilityDate: "2024-08-02",
    devtools: { enabled: true },
    devServer: {
        port: 8090
    },
    modules: ["@pinia/nuxt", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            "Noto+Sans+TC": "100..900"
        },
        display: "swap"
    },
    app: {
        baseURL: basePath,
        // buildAssetsDir: "/assets/"
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                }
            ],
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
