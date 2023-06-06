<script>
import PaymentServicesFooter from '../components/PaymentServicesFooter.vue';

export default {
    data() {
        return {
            time: 15,
            rechargeType: [
                {
                    id: 1,
                    title: "Comum"
                },
                {
                    id: 2,
                    title: "Vale-transporte"
                },
                {
                    id: 3,
                    title: "Escolar"
                },
                {
                    id: 4,
                    title: "Validação Web"
                },
                {
                    id: 5,
                    title: "Temporal"
                },
            ],
            rechargeInfo: [
                {
                    id: 1,
                    title: "Comum",
                    value: "R$ 00,00",
                },
                {
                    id: 2,
                    title: "Vale Transporte",
                    value: "R$ 00,00",
                },
                {
                    id: 3,
                    title: "Escolar",
                    value: "R$ 00,00",
                },
                {
                    id: 4,
                    title: "Temporal 1",
                    value: "VE D GRT ÔNIBUS\n VALIDAÇÃO EXPIRADA",
                },
                {
                    id: 5,
                    title: "Temporal 2",
                    value: "VE D GRT ÔNIBUS\n VALIDAÇÃO EXPIRADA",
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

        <div class="flex justify-center gap-[2%] w-[80%]">
            <button
                class="border-2 border-top shadow-xl py-5 px-12 rounded-[50px] text-3xl text-center font-regular cursor-pointer"
                v-for="type in rechargeType"
                :key="type.id"
                @click="$router.replace('/selectpayment')"
            >
                {{ type.title }}
            </button>
        </div>

        <div class="flex flex-row justify-center items-center gap-x-10 w-full mt-20">
            <div class="flex flex-col justify-center items-center shadow-2xl rounded-3xl w-[200px]" v-for="info in rechargeInfo" :key="info.id">
                <div class="bg-top text-white font-bold text-lg py-3 w-full rounded-t-3xl text-center ">
                    {{ info.title }}
                </div>

                <div class="text-center py-6">
                    {{ info.value }}
                </div>
            </div>
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