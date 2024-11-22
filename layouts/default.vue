<template>
    <div>
        <!-- Main Content -->
        <NuxtPage />

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
};
</script>
