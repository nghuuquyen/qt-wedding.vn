<template>
    <div class="pre-wedding-video bg-center bg-cover h-screen relative w-full flex items-center justify-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <h1 class="text-3xl font-bold text-center absolute top-[100px] inline" style="font-family: cursive; color: #8f7066;">
            Our Wedding Video
        </h1>

        <!-- Video Thumbnail with Play Button -->
        <div class="relative" ref="videoThumbnail">
            <!-- Thumbnail Image -->
            <img
                :src="thumbnail"
                alt="Pre-Wedding Video Thumbnail"
                class="h-auto rounded-lg shadow-lg w-[300px] md:w-[500px] lg:w-[600px] xl:w-[800px]"
                @click="openModal"
            />
            <!-- Play Button -->
            <button
                class="absolute top-1/2 left-[43%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-4xl bg-[#F7643B] hover:bg-opacity-75 rounded-full animate-bounce"
                style="top: 50%;"
                :class="playButtonAnimation"
                @click="openModal"
            >
                <img src="/images/play-button.png" alt="Play Button" class="w-10 h-10" />
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
                    class="absolute text-white bg-black bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100"
                >
                    ✕
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

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
    data() {
        return {
            playButtonAnimation: "animate__pulse",
            backgroundImage: "/images/bg/our-story-bg.jpg",
            showModal: false,
        };
    },
    created() {
        this.startAnimationLoop();
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
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        startAnimationLoop() {
            setInterval(() => {
                this.playButtonAnimation = "";
                setTimeout(() => {
                    this.playButtonAnimation = "animate__pulse";
                }, 10);
            }, 2000);
        },
    },
};
</script>

<style scoped>
/* Pre-Wedding Video Styles */
.pre-wedding-video button {
    top: -50px;
    right: -10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}
</style>
