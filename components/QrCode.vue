<template>
    <section class="bg-center bg-cover min-h-screen relative">
        <div class="w-full h-full flex items-center justify-center overflow-hidden">
            <div class="inset-0 text-center flex flex-col items-center">
                <img
                    :src="chibiImage"
                    alt="QR Background"
                    class="object-cover w-[40vh] max-w-[250px] mb-3 flex-shrink-0"
                    ref="image"
                />

                <img
                    :src="qrImage"
                    alt="QR Image"
                    class="object-cover w-[430px] mb-2 flex-shrink-0"
                    ref="qrImage"
                />
            </div>
        </div>
    </section>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
    props: {
        offAnimation: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            backgroundImage: "/images/bg/qr-bg.jpg",
            chibiImage: "/images/chibi.png",
            qrImage: "/images/qr-codes.png",
        };
    },
    mounted() {
        if (!this.offAnimation) {
            const sr = ScrollReveal({
                origin: "top",
                distance: "80px",
                duration: 2000,
                reset: false,
            });

            sr.reveal(this.$refs.image, {
                origin: "top",
                distance: "80px",
                duration: 3000,
            });

            sr.reveal(this.$refs.qrImage, {
                origin: "top",
                distance: "80px",
                duration: 3000,
            });
        }
    },
};
</script>