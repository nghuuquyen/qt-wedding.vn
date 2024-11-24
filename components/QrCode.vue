<template>
    <section class="bg-center bg-cover h-screen" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="w-full h-full flex items-center justify-center overflow-hidden">
            <div class="inset-0 text-center flex flex-col items-center">
                <img
                    :src="chibiImage"
                    alt="QR Background"
                    class="object-cover w-[250px] mb-3 flex-shrink-0"
                />

                <img
                    :src="qrImage"
                    alt="QR Image"
                    class="object-cover w-[430px] mb-2 flex-shrink-0"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            backgroundImage: "/images/bg/qr-bg.jpg",
            chibiImage: "/images/chibi.png",
            qrImage: "/images/qr-codes.png",
        };
    },
};
</script>