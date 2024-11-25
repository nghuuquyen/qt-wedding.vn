<template>
    <div
        class="quote-container relative w-full h-screen overflow-hidden"
    >
        <!-- Mobile View -->
        <div
            class="md:hidden relative w-full h-full flex items-center justify-center overflow-hidden bg-center bg-cover"
            :style="{ backgroundImage: `url(${imageUrl})` }"
        >
            <div class="inset-0 w-full h-full quote-box">
                <div
                    class="absolute z-2 bg-black bg-opacity-45 text-white px-6 py-4 rounded-lg max-w-[80%] text-center bottom-10 left-[10%] right-[10%]"
                >
                    <p class="text-lg font-serif italic leading-relaxed mx-4">
                        <span class="absolute left-[10px] top-[10px]">
                            <QuoteIcon />
                        </span>
                        {{ text }}
                    </p>
                    <div class="mt-4">
                        <div class="w-[100px] h-px bg-[#CEC4BA] my-2 m-auto"></div>
                        <span class="block text-sm uppercase tracking-widest opacity-90 font-light">
                            {{ subText }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Desktop View -->
        <div
            class="hidden md:grid grid-cols-2 gap-8 items-center w-full h-full px-16 bg-top bg-cover"
            :style="{ backgroundImage: `url(${imageUrl})` }"
        >
            <div class="absolute inset-0 backdrop-blur-sm"></div>
            <!-- Image Box -->
            <div
                class="relative z-2 flex justify-center items-center overflow-hidden"
                :class="isImageFirst ? '' : 'order-last'"
            >
                <img
                    :src="imageUrl"
                    alt="Story Image"
                    class="object-contain max-h-[80vh] w-auto rounded-lg shadow-sm"
                />
            </div>
            <!-- Quote Box -->
            <div
                class="quote-box max-w-[500px] relative z-2 flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-400 to-rose-500 text-white px-10 py-8 rounded-lg shadow-xl m-auto"
            >
                <div class="text-center">
                    <p class="text-2xl font-serif italic leading-relaxed">
                        {{ text }}
                    </p>
                    <div class="mt-4">
                        <div class="w-[85px] h-px bg-[white] my-2 m-auto"></div>
                        <span class="block text-sm uppercase tracking-widest font-semibold opacity-90">
                            {{ subText }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import QuoteIcon from "~/components/icons/QuoteIcon.vue";

export default {
    components: { QuoteIcon },
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        subText: {
            type: String,
            default: "",
        },
        isImageFirst: {
            type: Boolean,
            default: true, // Set too false to show Quote Box first
        },
    },
    mounted() {
        // Initialize ScrollReveal animations
        const revealOptions = {
            distance: "50px",
            duration: 800,
            opacity: 0,
            reset: false,
        };

        // Reveal for mobile view
        ScrollReveal().reveal(".quote-container", {
            ...revealOptions,
            duration: 3500,
            origin: "top",
        });

        // Reveal for desktop image box
        ScrollReveal().reveal(".quote-box", {
            ...revealOptions,
            duration: 7000,
            origin: "bottom",
        });
    },
};
</script>
