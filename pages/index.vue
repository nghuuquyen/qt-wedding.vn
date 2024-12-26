<template>
    <div class="page">
        <!-- Section: Banner -->
        <section id="banner" class="section text-white relative bg-cover bg-center">
            <!-- Banner Mobile -->
            <div
                :style="{ backgroundImage: `url(/images/banner.jpg)` }"
                class="absolute inset-0 -z-10 bg-cover bg-center"
                style="
                  background-size: cover;
                  background-position: center;
                "
            ></div>
            <!-- Banner Desktop -->
            <div
                :style="{ backgroundImage: `url(/images/banner-desktop.jpg)` }"
                class="hidden md:block absolute inset-0 -z-10 bg-cover bg-center"
                style="
                  background-size: cover;
                  background-position: center;
                "
            ></div>

            <div class="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center bottom-[-15%]">
                <div ref="logo" class="flex flex-col items-center content-center">
                    <img src="/images/logo.png" alt="Logo" class="mb-4 max-w-[200px] lg:max-w-[350px]" />
                    <h1 class="text-white text-3xl sm:text-4xl font-bold" style="font-family: cursive;">
                        Welcome to Our Wedding
                    </h1>
                </div>
            </div>
        </section>

        <OutStory id="our-story" />

        <Gallery id="gallery" />

        <PreWeddingVideo id="pre-wedding-video" thumbnail="/images/video-thumbnail.jpg" video-id="_4hbXkkfkrM"/>

        <ThankYou id="thank-you" />
    </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
    mounted() {
        ScrollReveal().reveal(this.$refs.logo, {
            delay: 500,
            duration: 1000,
            origin: "top",
            distance: "50px",
            opacity: 0,
        });
    },
};
</script>
<style scoped>
/* Page and Section Styles */
.page {
    width: 100%;
}

.section {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
