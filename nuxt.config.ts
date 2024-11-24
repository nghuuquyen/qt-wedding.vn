// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    css: [
        '@/assets/css/main.css',
        'animate.css',
        'scrollreveal',
    ],
    ssr: false,
    app: {
        buildAssetsDir: '/_nuxt/',
        head: {
            title: 'Huu Quyen & Thuy Trang Wedding',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: "Welcome to our wedding website! We're thrilled to share our love story and special moments with you. Thank you for being part of our journey!",
                },
                { name: 'author', content: 'Huu Quyen & Thuy Trang' },
                { name: 'keywords', content: 'wedding, Huu Quyen, Thuy Trang, love story, wedding celebration' },
                { property: 'og:title', content: 'Huu Quyen & Thuy Trang Wedding' },
                {
                    property: 'og:description',
                    content: "Welcome to our wedding website! We're thrilled to share our love story and special moments with you. Thank you for being part of our journey!",
                },
                {
                    property: 'og:image',
                    content: 'https://qt-wedding.vn/images/share-banner.png',
                },
                { property: 'og:url', content: 'https://qt-wedding.vn' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Huu Quyen & Thuy Trang Wedding' },
                {
                    name: 'twitter:description',
                    content: "Welcome to our wedding website! We're thrilled to share our love story and special moments with you. Thank you for being part of our journey!",
                },
                {
                    name: 'twitter:image',
                    content: 'https://qt-wedding.vn/images/share-banner.png',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/gtag'],
    gtag: {
        id: 'G-KVPV4DRSM9',
    },
});
