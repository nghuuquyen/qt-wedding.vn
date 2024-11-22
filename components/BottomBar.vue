<template>
    <!-- Fixed Pill Bottom Bar -->
    <div
        class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-4"
    >
        <!-- Equal-Sized Buttons with Larger Width -->
        <div class="flex-1 flex justify-center">
            <button
                @click="scrollToSection('our-story')"
                class="text-gray-700 font-bold w-32 text-center py-2"
            >
                Our Story
            </button>
        </div>
        <div class="flex-1 flex justify-center">
            <button
                @click="toggleQRModal"
                class="bg-green-700 text-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center"
            >
                QR
            </button>
        </div>
        <div class="flex-1 flex justify-center">
            <button
                @click="scrollToSection('gallery')"
                class="text-gray-700 font-bold w-32 text-center py-2"
            >
                Gallery
            </button>
        </div>
    </div>

    <!-- QR Modal -->
    <div
        v-if="showQR"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
    >
        <div class="bg-white rounded-t-lg p-6 w-full max-w-md">
            <h2 class="text-lg font-bold mb-4 text-center">Bank QR Codes</h2>
            <div class="flex justify-between">
                <div class="text-center">
                    <img src="~/assets/images/groom-qr.png" alt="Groom QR" class="w-24 h-24 mx-auto mb-2" />
                    <p>Groom's Bank</p>
                </div>
                <div class="text-center">
                    <img src="~/assets/images/bride-qr.png" alt="Bride QR" class="w-24 h-24 mx-auto mb-2" />
                    <p>Bride's Bank</p>
                </div>
            </div>
            <button
                @click="toggleQRModal"
                class="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg"
            >
                Close
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showQR: false,
        };
    },
    methods: {
        toggleQRModal() {
            this.showQR = !this.showQR;
        },
        scrollToSection(section) {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        },
    },
};
</script>

