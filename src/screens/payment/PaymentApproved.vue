<script>
import TopServicesFooter from '../../components/TopServicesFooter.vue';

export default {
    mounted() {
        setTimeout(() => {
            this.$router.replace("/sucess");
        }, 3000)
    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-5">Pagamento aprovado</h1>

        <span class="text-2xl">Retire seu cartão</span>

        <figure class="mt-10">
            TBC
        </figure>

        <TopServicesFooter />
    </main>
</template>