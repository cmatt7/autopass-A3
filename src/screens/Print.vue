<script>
import TopServicesFooter from '../components/TopServicesFooter.vue';

export default {
    mounted() {

    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-5">Deseja imprimir o recibo?</h1>

        <div class="flex flex-row justify-center items-center gap-32 my-20">
            <div class="border-2 border-top shadow-xl p-12 rounded-[50px] w-72 text-3xl text-center font-extrabold cursor-pointer"
                @click="$router.replace('/preference')">
                Sim
            </div>

            <div class="border-2 border-top shadow-xl p-12 rounded-[50px] w-72 text-3xl text-center font-extrabold cursor-pointer"
                @click="$router.replace('/preference')">
                Não
            </div>
        </div>

        <TopServicesFooter />
    </main>
</template>