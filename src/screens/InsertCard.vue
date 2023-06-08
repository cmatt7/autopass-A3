<script>
import PaymentServicesFooter from '../components/PaymentServicesFooter.vue';
import { useRoute } from 'vue-router';

export default {
    data() {
        const route = useRoute()
        let qtdpassagem = route.params.qtd
        localStorage.setItem('quantidade', route.params.qtd)
        let valorpassagens = (qtdpassagem * 4.40).toFixed(2)
        let valorformatado = valorpassagens.replace('.', ',')
        return {
            time: 15,
            qtd: route.params.qtd,
            valor: valorformatado
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
                this.$router.replace('/password')
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
        <h1 class="text-5xl font-extrabold mb-20">Insira seu cartão de débito</h1>

        <div class="flex justify-around w-[30%] text-xl font-semibold mb-10">
            <span v-if="qtd == 1">{{ qtd }} Unidade</span>
            <span v-else="qtd>1">{{ qtd }} Unidades</span>

            <span>R$ {{ valor }}</span>
        </div>

        <figure class="flex flex-col justify-center items-center">
            <img src="../assets/insira-o-cartao.png" title="Ícone inserir" class="h-[250px]" />
            <span class="text-top font-semibold text-lg">{{ time }}</span>
        </figure>

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

        <span class="absolute right-20 bottom-24 font-semibold text-3xl">Somente débito</span>

        <PaymentServicesFooter />
    </main>

    <RouterView />
</template>