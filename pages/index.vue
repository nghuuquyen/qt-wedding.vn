<template>
    <div class="page">
        <!-- Section: Banner -->
        <section id="banner" class="section bg-gradient-to-br from-purple-600 to-indigo-500 text-white relative">
            <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover" style="object-fit: none;">
                <source src="~/assets/videos/banner-video.mp4" type="video/mp4" />
            </video>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <img src="~/assets/images/logo.png" alt="Logo" class="mb-4 max-w-[200px] lg:max-w-[350px]" />
                <h1 class="text-white text-4xl font-bold" style="font-family: cursive;">
                    Welcome to Our Wedding
                </h1>
            </div>
        </section>

        <!-- Section: Our Story -->
        <section id="our-story" class="section bg-gray-100 flex justify-center items-center">
            <OutStory />
        </section>

        <!-- Section: Gallery -->
        <section id="gallery" class="section bg-gradient-to-br from-green-600 to-blue-500 text-white flex justify-center items-center">
            <h2 class="text-3xl font-bold">Gallery</h2>
        </section>

        <!-- Section: Thank You -->
        <section id="thank-you" class="section bg-gradient-to-br from-pink-600 to-red-500 text-white flex justify-center items-center">
            <h2 class="text-3xl font-bold">Thank You</h2>
        </section>
    </div>
</template>

<script>
export default {
    // Do nothing
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
