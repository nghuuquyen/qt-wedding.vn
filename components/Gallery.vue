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
                        loading="lazy"
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
            backgroundImage: "/images/our-story-bg.webp",
            images: [
                {
                    name: "0.png",
                    url: "/images/album/desktop/0.png",
                },
                {
                    name: "1.png",
                    url: "/images/album/desktop/1.png",
                },
                {
                    name: "2.png",
                    url: "/images/album/desktop/2.png",
                },
                {
                    name: "3.png",
                    url: "/images/album/desktop/3.png",
                },
                {
                    name: "4.png",
                    url: "/images/album/desktop/4.png",
                },
                {
                    name: "5.png",
                    url: "/images/album/desktop/5.png",
                },
                {
                    name: "6.png",
                    url: "/images/album/desktop/6.png",
                },
                {
                    name: "7.png",
                    url: "/images/album/desktop/7.png",
                },
                {
                    name: "8.png",
                    url: "/images/album/desktop/8.png",
                },
                {
                    name: "9.png",
                    url: "/images/album/desktop/9.png",
                },
                {
                    name: "10.png",
                    url: "/images/album/desktop/10.png",
                },
                {
                    name: "11.png",
                    url: "/images/album/desktop/11.png",
                },
                {
                    name: "12.png",
                    url: "/images/album/desktop/12.png",
                },
                {
                    name: "13.png",
                    url: "/images/album/desktop/13.png",
                },
                {
                    name: "14.png",
                    url: "/images/album/desktop/14.png",
                },
                {
                    name: "15.png",
                    url: "/images/album/desktop/15.png",
                },
            ],
        };
    },
};
</script>