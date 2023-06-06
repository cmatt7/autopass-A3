<script>
import PaymentServicesFooter from '../components/PaymentServicesFooter.vue';

export default {
    data() {
        return {
            time: 15,
        }
    },
    methods: {
        countdownTimer() {
            if (this.time > 0) {
                setTimeout(() => {
                    this.time -= 1;
                    this.countdownTimer()
                }, 1000)
            } else if (this.time === 0) {
                //this.$router.replace('/password')
            }
        },
    },
    created() {
        this.countdownTimer()
    },
    components: { PaymentServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-20">Selecione o tipo de recarga</h1>

        <div class="flex  justify-center gap-[1%] w-[80%]">
            <button
                class="border-2 border-top shadow-xl p-5 rounded-[50px] w-60 text-3xl text-center font-regular cursor-pointer"
                @click="$router.replace('/')">
                Comum
            </button>
            <button
                class="mr-30px border-2 border-top shadow-xl p-5 rounded-[50px] w-80 text-3xl font-regular font-regular cursor-pointer"
                @click="$router.replace('/')">
                Vale-transporte
            </button>
            <button
                class="border-2 border-top shadow-xl p-5 rounded-[50px] w-60 text-3xl text-center font-regular cursor-pointer"
                @click="$router.replace('/')">
                Escolar
            </button>
            <button
                class="border-2 border-top shadow-xl p-5 rounded-[50px] w-80 text-3xl text-center font-regular cursor-pointer"
                @click="$router.replace('/')">
                Validação web
            </button>
            <button
                class="border-2 border-top shadow-xl p-5 rounded-[50px] w-60 text-3xl text-center font-regular cursor-pointer"
                @click="$router.replace('/')">
                Temporal
            </button>
        </div>

        <button type="button"
            class="absolute left-20 bottom-24 rounded-full border-2 border-top py-2 px-4 mt-10 font-semibold"
            @click="$router.back()">
            <div class="flex flex-row justify-start">
                <figure class="flex flex-row justify-start mr-3">
                    <img src="../assets/voltar_icon.png" class="w-[20px]" />
                </figure>
                <span>Voltar</span>
            </div>
        </button>

        <span class="absolute right-20 bottom-24 font-semibold text-3xl">Somente débito ou dinheiro</span>

        <PaymentServicesFooter />
    </main>

    <RouterView />
</template>