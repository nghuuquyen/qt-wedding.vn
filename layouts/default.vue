<template>
    <div class="relative bg-center min-h-screen">
        <!-- Background -->
        <div
            :style="{ backgroundImage: `url(${backgroundImage})` }"
            class="absolute inset-0 -z-10 bg-cover bg-center"
            style="
              background-size: cover;
              background-position: center;
              position: fixed;
            "
        ></div>

        <!-- Heart Drop Background -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none z-10">
            <div
                v-for="n in 15"
                :key="n"
                class="absolute heart animate-fall"
                :style="randomStyles()"
            ></div>
        </div>

        <!-- Main Content -->
        <div class="relative">
            <NuxtPage />
        </div>

        <!-- Sticky Bottom Bar -->
        <BottomBar />
    </div>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue';

export default {
    components: {
        BottomBar,
    },
    data() {
        return {
            backgroundImage: "/images/bg/thank-bg.jpg", // Background image for the page
        };
    },
    methods: {
        randomStyles() {
            // Generate random styles for each heart
            const randomSize = Math.random() * 20 + 5; // Random size between 5px and 25px
            const randomLeft = Math.random() * 100; // Random horizontal position
            const randomDelay = Math.random() * 5; // Delay between 0s and 5s
            const randomDuration = Math.random() * 5 + 3; // Duration between 3s and 8s
            return {
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                left: `${randomLeft}%`,
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
            };
        },
    },
};
</script>

<style scoped>
/* Heart Shape */
.heart {
    position: absolute;
    top: -10%; /* Start slightly above the screen */
    background-color: #f43f5e; /* Tailwind's rose-500 */
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
}

.heart:before,
.heart:after {
    content: "";
    position: absolute;
    background-color: #f43f5e;
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.heart:before {
    top: -50%;
    left: 0;
}

.heart:after {
    top: 0;
    left: -50%;
}

/* Animation for Falling */
@keyframes fall {
    0% {
        transform: translateY(-100%) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.animate-fall {
    animation-name: fall;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
</style>
