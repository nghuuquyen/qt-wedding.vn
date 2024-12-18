<template>
    <div class="pre-wedding-video bg-center bg-cover h-screen relative w-full flex flex-col items-center justify-center">
        <h1 class="w-full text-3xl font-bold text-center mt-5 mb-10" style="font-family: cursive; color: #8f7066;">
            Our Wedding Video
        </h1>

        <!-- Video Thumbnail with Play Button -->
        <div ref="videoThumbnail">
            <!-- Thumbnail Image -->
            <img
                :src="thumbnail"
                alt="Pre-Wedding Video Thumbnail"
                class="rounded-lg shadow-lg max-w-[40vh] h-auto"
                @click="openModal"
            />
            <!-- Play Button -->
            <button
                aria-label="Play Video"
                class="rounded-full flex justify-center w-full text-center items-center absolute left-0 right-0 top-[40%]"
                @click="openModal"
            >
                <img src="/images/play-button.png" alt="Play Button" class="max-w-[10vh] h-auto" />
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
                    aria-label="Close Video Modal"
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
import {useMusic} from "~/composables/useMusic";

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
        const { musicState, temporarilyPauseMusic, resumeMusic } = useMusic();

        return {
            musicState,
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
            reset: false,
        });

        sr.reveal(this.$refs.videoThumbnail, {
            origin: "top",
            distance: "80px",
            duration: 2500,
        });
    },
    computed: {
        videoUrl() {
            return `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
        },
    },
    methods: {
        openModal() {
            if (this.musicState.isPlaying) {
                this.temporarilyPauseMusic();
            }

            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;

            if (this.musicState.isTemporarilyPaused) {
                this.resumeMusic();
            }
        },
    },
};
</script>
