<template>
    <div>
        <section id="banner" class="relative bg-cover">
            <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover" style="object-fit: none;">
                <source src="~/assets/videos/banner-video.mp4" type="video/mp4" />
            </video>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <img src="~/assets/images/logo.png" alt="Logo" class="mb-4" />
                <h1 class="text-white text-4xl font-bold">Welcome to Our Wedding</h1>
            </div>
        </section>
        <section id="our-story" class="bg-gray-200 flex justify-center items-center">
            <div>
                <h2 class="text-3xl font-bold">Our Story</h2>
                <p class="mt-4">Our journey began...</p>
            </div>
        </section>
        <section id="gallery" class="bg-white">
            <h2 class="text-center text-3xl font-bold py-8">Gallery</h2>
            <div class="carousel"> <!-- Add Tailwind carousel later --> </div>
        </section>
        <section id="thank-you" class="bg-gray-800 text-white flex flex-col justify-center items-center">
            <h2 class="text-4xl font-bold mb-4">Thank You</h2>
            <p>We appreciate you celebrating with us!</p>
        </section>
    </div>
</template>
