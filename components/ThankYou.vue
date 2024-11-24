<template>
    <section class="bg-center bg-cover h-screen relative" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div class="inset-0 text-center flex flex-col items-center">
                <img
                    :src="chibiImage"
                    alt="Thank You Background"
                    class="object-cover w-[250px] mb-3"
                    ref="image"
                />

                <div
                    class="bg-black bg-opacity-45 text-white px-6 py-4 rounded-lg max-w-[80%]"
                    ref="messageBox"
                >
                    <p class="text-lg font-serif italic leading-relaxed mx-4">
                        Your love and presence made our day complete. Thank you for being part of our journey.
                    </p>

                    <div class="mt-4">
                        <div class="w-[100px] h-px bg-[#CEC4BA] my-2 m-auto"></div>
                        <span class="block text-sm uppercase tracking-widest opacity-90 font-light">
                          Thank You for Sharing Our Special Day
                        </span>
                    </div>
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
            backgroundImage: "/images/bg/thank-bg.jpg",
            chibiImage: "/images/chibi.png",
        };
    },
    mounted() {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        sr.reveal(this.$refs.image, {
            origin: "top",
            distance: "80px",
            duration: 3000,
            reset: true,
        });

        sr.reveal(this.$refs.messageBox, {
            origin: "top",
            distance: "80px",
            duration: 7000,
            reset: true,
        });
    },
};
</script>