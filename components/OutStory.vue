<template>
    <div
        class="section relative w-full h-full bg-cover bg-center flex items-center justify-center"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
        <!-- Mobile View -->
        <div class="md:hidden relative w-full h-full flex items-center justify-center overflow-hidden">
            <img
                :src="quotes[currentQuoteIndex].image"
                alt="Story Image"
                class="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div class="absolute z-10 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg max-w-[80%] text-center">
                <p class="text-xl font-serif italic leading-relaxed">
                    "{{ quotes[currentQuoteIndex].text }}"
                </p>
            </div>
        </div>

        <!-- Desktop View -->
        <div class="hidden md:grid grid-cols-2 gap-8 items-center w-full h-full px-16">
            <!-- Image Box -->
            <div class="relative flex justify-center items-center overflow-hidden">
                <img
                    :src="quotes[currentQuoteIndex].image"
                    alt="Story Image"
                    class="object-contain w-full max-h-[650px] h-auto rounded-lg shadow-lg"
                />
            </div>
            <!-- Quote Box -->
            <div class="relative flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-500 to-rose-500 text-white px-10 py-8 rounded-lg w-[500px] shadow-xl">
                <div class="text-center">
                    <p class="text-2xl font-serif italic leading-relaxed">
                        "{{ quotes[currentQuoteIndex].text }}"
                    </p>
                    <div class="mt-4">
                        <span class="block text-sm uppercase tracking-widest font-semibold opacity-90">
                            - A Moment to Remember
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundImage: new URL("~/assets/images/our-story-bg.jpg", import.meta.url).href, // Background for the section
            quotes: [
                {
                    text: "This is where it all began, a story of love and hope.",
                    image: new URL("~/assets/images/story1.jpg", import.meta.url).href,
                },
                {
                    text: "Every step we took brought us closer to this day.",
                    image: new URL("~/assets/images/story2.jpg", import.meta.url).href,
                },
                {
                    text: "Together, we create memories that will last a lifetime.",
                    image: new URL("~/assets/images/story3.jpg", import.meta.url).href,
                },
                {
                    text: "Love is not about finding someone to live with, it's about finding someone you can't live without.",
                    image: new URL("~/assets/images/story4.jpg", import.meta.url).href,
                },
                {
                    text: "The best thing to hold onto in life is each other, and today we celebrate that bond.",
                    image: new URL("~/assets/images/story5.jpg", import.meta.url).href,
                },
            ],
            currentQuoteIndex: 0, // Index of the current quote
        };
    },
    mounted() {
        this.startAutoChange();
    },
    beforeUnmount() {
        clearInterval(this.autoChangeInterval);
    },
    methods: {
        startAutoChange() {
            this.autoChangeInterval = setInterval(() => {
                this.currentQuoteIndex =
                    (this.currentQuoteIndex + 1) % this.quotes.length;
            }, 5000); // Change every 5 seconds
        },
    },
};
</script>

<style scoped>
/* Quote Styles */
p {
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6); /* Enhance readability */
}
</style>
