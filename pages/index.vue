<template>
    <div class="w-screen h-screen overflow-hidden relative">
        <!-- Sections Container -->
        <div
            ref="sectionsContainer"
            class="flex flex-col h-screen w-screen transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateY(-${currentSectionIndex * 100}%)` }"
        >
            <!-- Section: Banner -->
            <div class="section flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-indigo-500 text-white">
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

            <!-- Section: Our Story -->
            <div class="section relative w-screen h-screen flex items-center justify-center">
                <OutStory />
            </div>

            <!-- Section: Gallery -->
            <div class="section flex items-center justify-center h-screen bg-gradient-to-br from-green-600 to-blue-500 text-white">
                <h2 class="text-3xl font-bold">Gallery</h2>
            </div>

            <!-- Section: Thank You -->
            <div class="section flex items-center justify-center h-screen bg-gradient-to-br from-pink-600 to-red-500 text-white">
                <h2 class="text-3xl font-bold">Thank You</h2>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="absolute inset-x-0 bottom-4 flex justify-center space-x-4">
            <button
                v-for="(section, index) in sections"
                :key="index"
                class="w-4 h-4 rounded-full bg-white"
                :class="{ 'bg-gray-800': currentSectionIndex === index }"
                @click="scrollToSection(index)"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSectionIndex: 0, // Current section being displayed
            sections: ["Banner", "Our Story", "Gallery", "Thank You"], // Sections list
            isScrolling: false, // Prevents rapid scrolling
            scrollTimeout: null, // Timeout for debouncing scroll
        };
    },
    mounted() {
        // Add scroll event listener
        window.addEventListener("wheel", this.handleScroll);
    },
    beforeUnmount() {
        // Clean up event listener
        window.removeEventListener("wheel", this.handleScroll);
        if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    },
    methods: {
        handleScroll(event) {
            // Prevent rapid scrolling
            if (this.isScrolling) return;

            // Scroll threshold to detect significant scrolling
            const SCROLL_THRESHOLD = 10; // Adjust this value as needed
            const direction = event.deltaY > SCROLL_THRESHOLD ? 1 : event.deltaY < -SCROLL_THRESHOLD ? -1 : 0;

            if (direction !== 0) {
                this.scrollToSection(this.currentSectionIndex + direction);
            }
        },
        scrollToSection(index) {
            // Ensure the index is within bounds
            if (index < 0 || index >= this.sections.length) return;

            // Update section index and lock scrolling temporarily
            this.currentSectionIndex = index;
            this.isScrolling = true;

            // Reset scrolling lock after the transition
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
            }, 800); // Match the transition duration
        },
    },
};
</script>

<style scoped>
/* Styling for smooth section transitions */
.section {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
}

/* Navigation dots */
button {
    transition: background-color 0.3s ease;
}
button.bg-gray-800 {
    background-color: #333;
}
</style>
