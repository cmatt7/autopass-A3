<script>
import PaymentServicesFooter from '../../components/PaymentServicesFooter.vue';

export default {
    data() {
        return {
            time: 15,
            componentInfo: [
                {
                    value: "R$ 5,00",
                },
                {
                    value: "R$ 10,00",
                },
                {
                    value: "R$ 15,00",
                },
                {
                    value: "R$ 20,00",
                },
                {
                    value: "R$ 50,00",
                },
                {
                    value: "Outro valor",
                },
            ],
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
        <h1 class="text-5xl font-extrabold mb-20">Selecione a forma de pagamento</h1>

        <div class="grid grid-cols-2 gap-10">
            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl"
                v-for="info in componentInfo" @click="$router.replace('/typeamount')">
                {{  info.value }}
            </button>
        </div>

        <span class="text-top text-lg font-bold mt-20">{{ time }}</span>

        <button type="button"
            class="absolute left-20 bottom-24 rounded-full border-2 border-top py-2 px-4 mt-10 font-semibold"
            @click="$router.back()">
            <div class="flex flex-row justify-start">
                <figure class="flex flex-row justify-start mr-3">
                    <img src="../../assets/voltar_icon.png" class="w-[20px]" />
                </figure>
                <span>Voltar</span>
            </div>
        </button>

        <PaymentServicesFooter />
    </main>

    <RouterView />
</template>