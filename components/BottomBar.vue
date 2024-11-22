<template>
    <div class="fixed bottom-0 w-full bg-white shadow-lg flex justify-around items-center p-4">
        <button @click="scrollToSection('our-story')" class="text-gray-700 font-bold">Our Story</button>
        <button @click="toggleQRModal" class="bg-pink-500 text-white p-4 rounded-full -mt-6 shadow-lg">
            QR
        </button>
        <button @click="scrollToSection('gallery')" class="text-gray-700 font-bold">Gallery</button>
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
