<template>
    <!-- Floating QR Button -->
    <div class="fixed bottom-[75px] right-[15px] flex flex-col items-center space-y-2 w-12 h-12">
        <button
            aria-label="QR Code"
            @click="toggleQRModal"
            style="z-index: 1;"
            class="z-1 bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
            <span class="text-lg font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                </svg>
            </span>
        </button>
    </div>

    <!-- Floating Expandable Button -->
    <div class="fixed bottom-[20px] right-[15px] flex flex-col items-center space-y-2">
        <!-- Menu Items (Hidden by Default) -->
        <transition-group name="menu" tag="div" class="absolute right-0 bottom-[60px] w-[160px]">
            <div
                v-if="menuVisible"
                v-for="(item, index) in menuItems"
                :key="index"
                class="bg-orange-400 text-sm text-white text-center font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer mb-2"
                @click="item.action"
            >
                {{ item.label }}
            </div>
        </transition-group>

        <!-- Main Expand Button -->
        <button
            aria-label="Expand Menu"
            @click="toggleMenu"
            class="fixed bottom-[20px] right-[15px] bg-orange-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center font-bold transition-transform duration-300 hover:scale-110"
        >
            <span v-if="menuVisible" class="text-2xl text-white" style="line-height: normal;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </span>
            <span v-else class="text-2xl text-white" style="line-height: normal;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </span>
        </button>
    </div>

    <!-- Floating Music Button -->
    <div class="fixed bottom-[20px] left-4 flex flex-row items-center z-0">
        <button
            aria-label="Toggle Music"
            @click="toggleMusic"
            style="z-index: 1;"
            class="z-1 bg-orange-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
            <span class="text-lg font-bold">
                <span v-if="musicState?.isPlaying">❚❚</span>
                <span v-else class="text-2xl">▶</span>
            </span>
        </button>
        <span
            class="text-sm text-white mt-0 bg-orange-400 px-6 py-1 -ml-4 rounded-2xl overflow-hidden relative"
            style="width: 145px; height: 30px; line-height: inherit;"
        >
            <span class="absolute whitespace-nowrap" :class="{'animate-scroll': musicState?.isPlaying}" style="animation-duration: 20s;">
                {{ musicState?.isPlaying ? "Now Playing: Một Đời Song by 14 Casper and Bon Nghiêm" : "Play Music" }}
            </span>
        </span>
    </div>

    <!-- QR Modal -->
    <div
        v-if="showQR"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
    >
        <div class="bg-white rounded-t-lg p-6 w-full max-w-md bg-cover bg-center" style="background-image: url(/images/bg/qr-bg.jpg);">
            <h2 class="text-lg font-bold mb-4 text-center">Bank QR Codes</h2>
            <div class="flex justify-between">
                <QrCode v-if="showQR" :off-animation="true" />
            </div>
            <button
                aria-label="Close QR Modal"
                @click="toggleQRModal"
                class="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg"
            >
                Close
            </button>
        </div>
    </div>
</template>

<script>
import { useMusic } from "~/composables/useMusic";
import QrCode from "@/components/QrCode.vue";

export default {
    components: {
        QrCode,
    },
    setup() {
        const { musicState, toggleMusic } = useMusic();

        return {
            musicState,
            toggleMusic,
        };
    },
    data() {
        return {
            menuVisible: false, // State to control menu visibility
            menuItems: [
                {
                    label: "Our Story",
                    action: () => this.scrollToSection("our-story"),
                },
                {
                    label: "Gallery",
                    action: () => this.scrollToSection("gallery"),
                },
                {
                    label: "Wedding Video",
                    action: () => this.scrollToSection("pre-wedding-video"),
                },
                {
                    label: "QR Code",
                    action: this.toggleQRModal,
                },
            ],
            showQR: false,
        };
    },
    methods: {
        toggleQRModal() {
            this.showQR = !this.showQR;
        },
        scrollToSection(section) {
            document.getElementById(section).scrollIntoView({ behavior: "smooth" });
        },
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
        },
    },
};
</script>

<style scoped>
/* Scrolling effect for music title */
@keyframes scroll {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    animation-name: scroll;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    position: absolute;
    right: 0;
}
</style>
