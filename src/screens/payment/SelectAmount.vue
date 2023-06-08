<script>
import PaymentServicesFooter from '../../components/PaymentServicesFooter.vue';

export default {
    data() {
        return {
            time: 15
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
                @click="$router.replace('/insertcardvalue/5')">
                R$ 5,00
            </button>
            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl"
                @click="$router.replace('/insertcardvalue/10')">
                R$ 10,00
            </button>
            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl"
                @click="$router.replace('/insertcardvalue/15')">
                R$ 15,00
            </button>
            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl"
                @click="$router.replace('/insertcardvalue/20')">
                R$ 20,00
            </button>
            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl"
                @click="$router.replace('/insertcardvalue/50')">
                R$ 50,00
            </button>
            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl"
                @click="$router.replace('/typeamount')">
                Outro valor
            </button>
        </div>
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