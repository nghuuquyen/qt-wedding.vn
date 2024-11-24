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
        head: {
            title: 'Huu Quyen & Thuy Trang Wedding', // Main title of the website
            htmlAttrs: {
                lang: 'en', // Set the language to English
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Join us in celebrating the wedding of Huu Quyen and Thuy Trang. Discover our love story, wedding details, and beautiful memories.',
                }, // SEO description
                {name: 'author', content: 'Huu Quyen & Thuy Trang'}, // Author of the site
                {name: 'keywords', content: 'wedding, Huu Quyen, Thuy Trang, love story, wedding celebration'}, // SEO keywords
                {
                    property: 'og:title',
                    content: 'Huu Quyen & Thuy Trang Wedding',
                }, // Open Graph title
                {
                    property: 'og:description',
                    content: 'Celebrate the love of Huu Quyen and Thuy Trang with us. Explore our love story, wedding details, and special moments.',
                }, // Open Graph description
                {
                    property: 'og:image',
                    content: 'https://qt-wedding.vn/images/banner.jpg', // Open Graph image (absolute URL)
                },
                {
                    property: 'og:url',
                    content: 'https://qt-wedding.vn', // Custom domain
                },
                {property: 'og:type', content: 'website'}, // Type of Open Graph content
                {name: 'twitter:card', content: 'summary_large_image'}, // Twitter card type
                {name: 'twitter:title', content: 'Huu Quyen & Thuy Trang Wedding'}, // Twitter title
                {
                    name: 'twitter:description',
                    content: 'Celebrate the wedding of Huu Quyen and Thuy Trang. Discover their love story, wedding plans, and cherished moments.',
                }, // Twitter description
                {
                    name: 'twitter:image',
                    content: 'https://qt-wedding.vn/images/banner.jpg', // Twitter image (absolute URL)
                },
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/favicon.png'}, // Favicon
                {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'}, // Apple touch icon
            ],
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
