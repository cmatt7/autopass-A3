<script>
import TopServicesFooter from '../../components/TopServicesFooter.vue';

export default {
    mounted() {
        setTimeout(() => {
            this.$router.replace("/print")
        }, 5000)
    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-5">Bilhete carregado com sucesso</h1>

        <figure class="my-10">
            <img src="../../assets/cartão-carregado.png" title="Ícone senha" class="h-[250px]" />
        </figure>

        <p class="text-2xl">Seu novo saldo: <span class="text-top font-bold">R$ 13,20</span></p>
        <span class="text-top text-2xl font-bold mt-5">Não se esqueça de retirar-se da ATM</span>

        <TopServicesFooter />
    </main>
</template>