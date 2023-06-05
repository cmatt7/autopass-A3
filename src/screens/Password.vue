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
                this.$router.replace('/processpayment')
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
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-20">Digite sua senha</h1>

        <div class="flex justify-around w-[30%] text-xl font-semibold mb-10">
            <span>4 Unidades</span>

            <span>R$ 13,20</span>
        </div>

        <figure class="flex flex-col justify-center items-center">
            TBC

            <span class="text-top font-semibold text-lg">{{ time }}</span>
        </figure>

        <button type="button" class="absolute left-20 bottom-24 rounded-full border-2 border-top py-2 px-4 mt-10 font-semibold"
            @click="$router.push('/')">
            Cancelar
        </button>

        <TopServicesFooter/>
    </main>
</template>