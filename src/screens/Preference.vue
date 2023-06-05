<script>
import TopServicesFooter from '../components/TopServicesFooter.vue';

export default {
    data() {
        return {
            time: 15,
        }
    },
    methods: {
        countdownTimer() {
            if(this.time > 0) {
                setTimeout(() => {
                    this.time -= 1;
                    this.countdownTimer()
                }, 1000)
            } else if (this.time === 0) {
                this.$router.replace('/')
            }
        }
    },
    created() {
        this.countdownTimer()
    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen gap-6">
        <h1 class="text-5xl font-extrabold mb-5">Agradecemos sua preferência</h1>

        <p class="text-xl">Você pode realizar este processo em nosso aplicativo</p>

        <figure class="my-10">
            <img src="../assets/top_qr_code.png" class="h-72"/>
        </figure>

        <p class="text-xl my-5">Escaneie o código acima para baixá-lo</p>

        <p class="text-xl">Voltando para a tela inicial em <span class="text-top font-bold">{{ time }} segundos</span></p>

        <TopServicesFooter />
    </main>
</template>