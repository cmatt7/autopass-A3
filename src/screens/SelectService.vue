<script>
import TopServicesFooter from '../components/TopServicesFooter.vue';

export default {
    data() {
        return {
            options: [
                {
                    path: "/qrcode",
                    title: "Bilhete QR Code",
                    image: "top_qr_code.png",
                },
                {
                    path: "/recargatop",
                    title: "Recarga TOP",
                    image: "cartao_top.jpg",
                },
                {
                    path: "/bilhete",
                    title: "Bilhete Único",
                    image: "bilhete_unico.png",
                },
            ]
        }
    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center h-screen w-full">
        <h1 class="text-5xl font-extrabold mb-20">O que deseja?</h1>

        <div class="flex flex-row justify-evenly gap-16">
            <div class="flex flex-col justify-center items-center gap-2" v-for="item in options">
                <h3 class="font-bold text-lg">{{ item.title }}</h3>

                <RouterLink :to="item.path">
                    <figure
                        class="flex justify-center items-center h-64 w-64 border-2 border-top shadow-2xl rounded-2xl p-3 cursor-pointer hover:scale-105 duration-300 ease-in-out">
                        <img :src="`/src/assets/${item.image}`" />
                    </figure>
                </RouterLink>
            </div>
        </div>

        <TopServicesFooter />
    </main>
</template>