<template>
    <div class="pre-wedding-video bg-center bg-cover h-screen relative w-full flex items-center justify-center">
        <h1 class="text-3xl font-bold text-center absolute top-[100px] inline" style="font-family: cursive; color: #8f7066;">
            Our Wedding Video
        </h1>

        <!-- Video Thumbnail with Play Button -->
        <div ref="videoThumbnail">
            <!-- Thumbnail Image -->
            <img
                :src="thumbnail"
                alt="Pre-Wedding Video Thumbnail"
                class="h-auto rounded-lg shadow-lg w-[300px] md:w-[500px] lg:w-[600px] xl:w-[800px]"
                @click="openModal"
            />
            <!-- Play Button -->
            <button
                class="rounded-full flex justify-center w-full text-center items-center absolute left-0 right-0 top-[40%]"
                @click="openModal"
            >
                <img src="/images/play-button.png" alt="Play Button" class="w-[95px] h-auto" />
            </button>
        </div>

        <!-- Video Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
            <div class="relative w-[90%] max-w-[800px] aspect-video rounded-lg shadow-lg bg-black">
                <iframe
                    :src="videoUrl"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    class="w-full h-full"
                ></iframe>
                <button
                    @click="closeModal"
                    class="absolute top-[-50px] right-[-10px] text-white bg-black bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100"
                >
                    ✕
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import { useMusic } from "~/composables/useMusic";

export default {
    props: {
        thumbnail: {
            type: String,
            required: true,
        },
        videoId: {
            type: String,
            required: true,
        },
    },
    setup() {
        const { temporarilyPauseMusic, resumeMusic } = useMusic();

        return {
            temporarilyPauseMusic,
            resumeMusic,
        };
    },
    data() {
        return {
            backgroundImage: "/images/bg/qr-bg.jpg",
            showModal: false,
        };
    },
    mounted() {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        sr.reveal(this.$refs.videoThumbnail, {
            origin: "top",
            distance: "80px",
            duration: 3000,
            reset: true,
        });
    },
    computed: {
        videoUrl() {
            return `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
        },
    },
    methods: {
        openModal() {
            this.temporarilyPauseMusic();
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.resumeMusic();
        },
    },
};
</script>

