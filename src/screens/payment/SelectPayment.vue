<script>
import PaymentServicesFooter from '../../components/PaymentServicesFooter.vue';

export default {
    components: { PaymentServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-20">Selecione a forma de pagamento</h1>

        <div class="flex flex-row justify-center items-center gap-x-10">
            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl" @click="$router.replace('/selectamount')">
                Débito
            </button>

            <button type="button" class="border-2 border-top text-3xl text-black font-bold py-6 px-20 rounded-3xl shadow-xl" @click="$router.replace('/selectamount')">
                Dinheiro
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