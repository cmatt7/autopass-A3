<script>
import TopServicesFooter from '../components/TopServicesFooter.vue';
import { useRoute } from 'vue-router';

export default {
    data() {
        const route = useRoute()
        return {
            time: 15,
            qtd: route.params.qtd,
            value: this.createValue(route.params.qtd)
        }
    },
    methods: {
        createValue: function (quantidade) {
            let valueTicket = (quantidade * 4.40).toFixed(2)
            let valueFormatted = valueTicket.replace('.', ',')
            return valueFormatted
        },
        countdownTimer() {
            if (this.time > 0) {
                setTimeout(() => {
                    this.time -= 1;
                    this.countdownTimer()
                }, 1000)
            } else if (this.time === 0) {
                this.$router.replace('/print')
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

        <div class="flex justify-around w-[30%] text-xl font-semibold mb-3">
            <span>{{ qtd }} Unidades</span>

            <span>R$ {{ value }}</span>
        </div>

        <figure class="flex flex-col justify-center items-center">
            <img src="../assets/senha.png" title="Ícone senha" class="h-[250px]" />
            <span class="text-top font-semibold text-lg">{{ time }}</span>
        </figure>

        <button type="button"
            class="absolute left-20 bottom-24 rounded-full border-2 border-top py-2 px-4 mt-10 font-semibold"
            @click="$router.push('/')">
            <div class="flex flex-row justify-start">
                <figure class="flex flex-row justify-start mr-3">
                    <img src="../assets/cancelar_icon.png" class="w-[20px]" />
                </figure>
                <span>Cancelar</span>
            </div>
        </button>

        <TopServicesFooter />
    </main>
</template>