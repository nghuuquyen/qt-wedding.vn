<template>
    <div class="bg-center bg-cover bg-fixed" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <!-- Main Content -->
        <NuxtPage />

        <!-- Sticky Bottom Bar -->
        <BottomBar v-if="false" />
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
            backgroundImage: "/images/bg/thank-bg.jpg",
        }
    }
};
</script>

<style>
@import '@/assets/css/main.css'; /* Ensure Tailwind CSS is imported here */
</style>