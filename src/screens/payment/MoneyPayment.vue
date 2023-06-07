<script>
import TopServicesFooter from '../../components/TopServicesFooter.vue';

export default {
    mounted() {
        setTimeout(() => {

        }, 3000)
    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-5">Pagamento com dinheiro</h1>

        <p class="text-2xl">Valor total inserido: <span class="font-bold">R$10,00</span></p>

        <button type="button" class="border-2 border-top py-5 px-20 text-2xl font-semibold rounded-3xl mt-10"
            @click="$router.replace('/processmoney')">
            Concluir
        </button>

        <span class="text-2xl font-bold mt-10">Atenção</span>
        <p class="text-xl">Este terminal não aceita moedas e não devolve notas</p>

        <button type="button"
            class="absolute left-20 bottom-24 rounded-full border-2 border-top py-2 px-4 mt-10 font-semibold"
            @click="$router.replace('/')">
            <div class="flex flex-row justify-start">
                <figure class="flex flex-row justify-start mr-3">
                    <img src="../../assets/cancelar_icon.png" class="w-[20px]" />
                </figure>
                <span>Cancelar</span>
            </div>
        </button>

        <TopServicesFooter />
    </main>
</template>