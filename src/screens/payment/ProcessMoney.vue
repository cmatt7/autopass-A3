<script>
import TopServicesFooter from '../../components/TopServicesFooter.vue';

export default {
    data() {
        return {
            loadState: false,
        }
    },
    mounted() {
        this.showToggle()

        setTimeout(() => {
            this.$router.replace("/sucess")
        }, 3000)
    },
    methods: {
        showToggle() {
            setTimeout(() => {
                this.show = true
            }, 1000)
        }
    },
    components: { TopServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-5xl font-extrabold mb-20">Processando pagamento...</h1>

        <div v-if="!show" class="h-60 w-60 border-4 border-l-black border-r-top 
                border-b-black border-t-black animate-spin ease-in-out duration-500 rounded-full">
        </div>

        <TopServicesFooter />
    </main>
</template>