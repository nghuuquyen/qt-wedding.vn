<template>
    <div id="fullpage">
        <div class="section" id="banner">
            <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover" style="object-fit: none;">
                <source src="~/assets/videos/banner-video.mp4" type="video/mp4" />
            </video>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <img src="~/assets/images/logo.png" alt="Logo" class="mb-4 max-w-[200px] lg:max-w-[350px]" />
                <h1 class="text-white text-4xl font-bold" style="font-family: cursive;">
                    Welcome to Our Wedding
                </h1>
            </div>
        </div>

        <div class="section" id="our-story">
            <div class="flex justify-center items-center h-full bg-gray-200">
                <div>
                    <h2 class="text-3xl font-bold">Our Story</h2>
                    <p class="mt-4">Our journey began...</p>
                </div>
            </div>
        </div>

        <div class="section" id="gallery">
            <div class="h-full bg-white flex flex-col justify-center items-center">
                <h2 class="text-center text-3xl font-bold py-8">Gallery</h2>
                <div class="carousel"> <!-- Add Tailwind carousel later --> </div>
            </div>
        </div>

        <div class="section" id="thank-you">
            <div class="h-full bg-gray-800 text-white flex flex-col justify-center items-center">
                <h2 class="text-4xl font-bold mb-4">Thank You</h2>
                <p>We appreciate you celebrating with us!</p>
            </div>
        </div>
    </div>
</template>

<script>
import fullpage from 'fullpage.js';

export default {
    mounted() {
        new fullpage('#fullpage', {
            autoScrolling: true,
            navigation: true,
            scrollingSpeed: 700,
        });
    },
};
</script>

<style>
html,
body {
    height: 100%;
    margin: 0;
    overflow: hidden; /* Prevent scrollbars */
}

.section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
