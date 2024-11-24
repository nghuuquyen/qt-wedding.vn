// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    css: [
        '@/assets/css/main.css',
        'animate.css',
        'scrollreveal',
    ],
    ssr: false,
    app: {
        buildAssetsDir: '/_nuxt/',
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})