<template>
    <section class="bg-center bg-cover h-screen relative">
        <h1 class="text-3xl font-bold text-center mt-10 w-full absolute" style="font-family: cursive; color: #8f7066;">
            Our Album
        </h1>

        <div class="custom-scrollbar overflow-x-auto px-4 h-full" ref="gallery">
            <div class="flex flex-row space-x-4 sm:space-x-8 h-full items-center relative">
                <div
                    v-for="(item, index) in images"
                    :key="index"
                    class="flex-shrink-0"
                >
                    <img
                        :src="item.url"
                        :alt="item.name"
                        class="h-[50vh] w-auto rounded-lg shadow-md"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
    data() {
        return {
            backgroundImage: "/images/bg/our-story-bg.jpg",
            images: [
                {
                    name: "0.png",
                    url: "/images/album/0.png",
                },
                {
                    name: "1.png",
                    url: "/images/album/1.png",
                },
                {
                    name: "2.png",
                    url: "/images/album/2.png",
                },
                {
                    name: "3.png",
                    url: "/images/album/3.png",
                },
                {
                    name: "4.png",
                    url: "/images/album/4.png",
                },
                {
                    name: "5.png",
                    url: "/images/album/5.png",
                },
                {
                    name: "6.png",
                    url: "/images/album/6.png",
                },
                {
                    name: "7.png",
                    url: "/images/album/7.png",
                },
                {
                    name: "8.png",
                    url: "/images/album/8.png",
                },
                {
                    name: "9.png",
                    url: "/images/album/9.png",
                },
                {
                    name: "10.png",
                    url: "/images/album/10.png",
                },
                {
                    name: "11.png",
                    url: "/images/album/11.png",
                },
                {
                    name: "12.png",
                    url: "/images/album/12.png",
                },
                {
                    name: "13.png",
                    url: "/images/album/13.png",
                },
                {
                    name: "14.png",
                    url: "/images/album/14.png",
                },
                {
                    name: "15.png",
                    url: "/images/album/15.png",
                },
                {
                    name: "16.png",
                    url: "/images/album/16.png",
                },
            ],
        };
    },
    mounted() {
        ScrollReveal().reveal(this.$refs.gallery, {
            delay: 500,
            duration: 3000,
            origin: "top",
            distance: "50px",
            opacity: 0,
        });
    },
};
</script>

<style scoped>
/* Target the specific div with the 'custom-scrollbar' class */
.custom-scrollbar {
    scrollbar-color: pink transparent; /* Color for the scrollbar (thumb and track) */
    scrollbar-width: thin; /* Thin scrollbar for modern browsers */
}

/* For webkit-based browsers (Chrome, Edge, Safari) */
.custom-scrollbar::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: pink; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Round corners */
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: transparent; /* Color of the scrollbar track */
}
</style>