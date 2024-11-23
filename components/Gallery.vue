<template>
    <section class="bg-center bg-cover h-screen relative" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <h1 class="text-3xl font-bold text-center absolute left-[15px] top-[100px] inline" style="font-family: cursive; color: #8f7066;">
            Our Album
        </h1>

        <div class="overflow-x-auto p-4 h-full">
            <div class="flex flex-row space-x-4 sm:space-x-8 h-full items-center relative">
                <div
                    v-for="(item, index) in images"
                    :key="index"
                    class="flex-shrink-0"
                >
                    <img
                        :src="item.url"
                        :alt="item.name"
                        class="h-[500px] w-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            backgroundImage: new URL("~/assets/images/our-story-bg.webp", import.meta.url).href,
            images: [
                {
                    name: "0.png",
                    url: new URL("~/assets/images/album/desktop/0.png", import.meta.url).href,
                },
                {
                    name: "1.png",
                    url: new URL("~/assets/images/album/desktop/1.png", import.meta.url).href,
                },
                {
                    name: "2.png",
                    url: new URL("~/assets/images/album/desktop/2.png", import.meta.url).href,
                },
                {
                    name: "3.png",
                    url: new URL("~/assets/images/album/desktop/3.png", import.meta.url).href,
                },
                {
                    name: "4.png",
                    url: new URL("~/assets/images/album/desktop/4.png", import.meta.url).href,
                },
                {
                    name: "5.png",
                    url: new URL("~/assets/images/album/desktop/5.png", import.meta.url).href,
                },
                {
                    name: "6.png",
                    url: new URL("~/assets/images/album/desktop/6.png", import.meta.url).href,
                },
                {
                    name: "7.png",
                    url: new URL("~/assets/images/album/desktop/7.png", import.meta.url).href,
                },
                {
                    name: "8.png",
                    url: new URL("~/assets/images/album/desktop/8.png", import.meta.url).href,
                },
                {
                    name: "9.png",
                    url: new URL("~/assets/images/album/desktop/9.png", import.meta.url).href,
                },
                {
                    name: "10.png",
                    url: new URL("~/assets/images/album/desktop/10.png", import.meta.url).href,
                },
                {
                    name: "11.png",
                    url: new URL("~/assets/images/album/desktop/11.png", import.meta.url).href,
                },
                {
                    name: "12.png",
                    url: new URL("~/assets/images/album/desktop/12.png", import.meta.url).href,
                },
                {
                    name: "13.png",
                    url: new URL("~/assets/images/album/desktop/13.png", import.meta.url).href,
                },
                {
                    name: "14.png",
                    url: new URL("~/assets/images/album/desktop/14.png", import.meta.url).href,
                },
                {
                    name: "15.png",
                    url: new URL("~/assets/images/album/desktop/15.png", import.meta.url).href,
                },
            ],
        };
    },
};
</script>