<script>
import PaymentServicesFooter from '../../components/PaymentServicesFooter.vue';

export default {
    data() {
        return {
            valor: 'R$',
        }
    },
    methods: {
        insert: function (number) {
            this.valor += number
        },
        replace: function () {
            let valor = this.valor.replace('R$', '')
            let rota = '/insertcardvalue/' + valor
            this.$router.replace(rota)
        }
    },
    components: { PaymentServicesFooter }
}


</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-10">Selecione a forma de pagamento</h1>

        <h3 class="text-3xl">Clique em "Selecionar" para definir o valor</h3>

        <!-- Calculator Mockup -->
        <div class="w-[300px] h-auto border-2 border-black mt-10 rounded-2xl">
            <div class="flex flex-col items-center border-b-2 border-black py-5">
                <span class="text-top text-xl font-semibold text-center">{{ valor }}</span>
            </div>

            <div class="grid grid-rows-4 text-xl">
                <div class="grid grid-cols-3 text-center">
                    <span @click="insert(7)" class="border-b-2 border-r-2 border-black p-4">7</span>
                    <span @click="insert(8)" class="border-b-2 border-r-2 border-black p-4">8</span>
                    <span @click="insert(9)" class="border-b-2 border-black p-4">9</span>
                </div>
                <div class="grid grid-cols-3 text-center">
                    <span @click="insert(4)" class="border-b-2 border-r-2 border-black p-4">4</span>
                    <span @click="insert(5)" class="border-b-2 border-r-2 border-black p-4">5</span>
                    <span @click="insert(6)" class="border-b-2 border-black p-4">6</span>
                </div>
                <div class="grid grid-cols-3 text-center">
                    <span @click="insert(1)" class="border-b-2 border-r-2 border-black p-4">1</span>
                    <span @click="insert(2)" class="border-b-2 border-r-2 border-black p-4">2</span>
                    <span @click="insert(3)" class="border-b-2 border-black p-4">3</span>
                </div>
                <div class="grid grid-cols-3 text-center">
                    <span @click="insert(0)" class="border-r-2 border-black p-4">0</span>
                    <span @click="insert(',')" class="border-r-2 border-black p-4">,</span>
                    <button type="button" @click="replace">
                        Selecionar
                    </button>
                </div>
            </div>
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