<template>
    <div>
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
};
</script>

<style>
@import '@/assets/css/main.css'; /* Ensure Tailwind CSS is imported here */
</style>