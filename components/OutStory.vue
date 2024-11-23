<template>
    <main class="flex flex-col bg-cover bg-center">
        <Quote
            v-for="(quote, index) in quotes"
            :key="index"
            :imageUrl="quote.image"
            :text="quote.text"
            subText="A Moment to Remember"
        />
    </main>
</template>

<script>

export default {
    data() {
        return {
            quotes: [
                {
                    text: "Every step we took brought us closer to this day.",
                    image: new URL("~/assets/images/HNG00140.jpg", import.meta.url).href,
                },
                {
                    text: "Love is not about finding someone to live with, it's about finding someone you can't live without.",
                    image: new URL("~/assets/images/HNG00416_1.jpg", import.meta.url).href,
                },
                {
                    text: "I saw that you were perfect, and so I loved you. \n" +
                        "Then I saw that you were not perfect and I loved you even more.",
                    image: new URL("~/assets/images/HNG09883.jpg", import.meta.url).href,
                },
                {
                    text: "Two souls, one journey, a love that grows stronger with each chapter, capturing moments we’ll cherish forever.",
                    image: new URL("~/assets/images/HNG00177.jpg", import.meta.url).href,
                },
                {
                    text: "Today, our hearts unite, and from here, we walk together—writing a love story that will last a lifetime.",
                    image: new URL("~/assets/images/HNG00276.jpg", import.meta.url).href,
                },
            ],
        };
    },
};
</script>

