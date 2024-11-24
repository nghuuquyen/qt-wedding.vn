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
                    image: "/images/quotes/HNG00140.jpg",
                },
                {
                    text: "Love is not about finding someone to live with, it's about finding someone you can't live without.",
                    image: "/images/quotes/HNG00416_1.jpg",
                },
                {
                    text: "I saw that you were perfect, and so I loved you. \n" +
                        "Then I saw that you were not perfect and I loved you even more.",
                    image: "/images/quotes/HNG09883.jpg",
                },
                {
                    text: "Two souls, one journey, a love that grows stronger with each chapter, capturing moments we’ll cherish forever.",
                    image: "/images/quotes/HNG00177.jpg",
                },
                {
                    text: "Today, our hearts unite, and from here, we walk together—writing a love story that will last a lifetime.",
                    image: "/images/quotes/HNG00276.jpg",
                },
            ],
        };
    },
};
</script>

