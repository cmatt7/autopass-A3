<script>
import TopServicesFooter from '../../components/TopServicesFooter.vue';

export default {
    mounted() {
        setTimeout(() => {
            this.$router.replace("/print")
        }, 3000)
    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-5">Passe escolar carregado com sucesso</h1>

        <figure class="my-10">
            TBC
        </figure>

        <p class="text-2xl">Seu novo saldo: <span class="font-bold">R$ 320, 00</span></p>
        <span class="text-top text-2xl font-bold mt-5">Não se esqueça de retirá-lo da ATM</span>

        <TopServicesFooter />
    </main>
</template>