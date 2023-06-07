<script>
import PaymentServicesFooter from '../components/PaymentServicesFooter.vue';

export default {
    components: { PaymentServicesFooter }
}
</script>

<template>
    <main class="flex flex-col justify-center items-center w-full h-screen">
        <h1 class="text-6xl font-extrabold ">Quantos bilhetes você deseja?</h1>

        <div class="relative flex">
            <div class="flex flex-col justify-center items-center gap-y-5 w-full">
                <RouterLink to="/insertcard">
                    <div
                        class="flex flex-row justify-between border-2 border-top rounded-full w-[600px] py-3 px-10 font-bold text-lg shadow-xl">
                        <span>1 Unidade</span>

                        <span>R$ 4,40</span>
                    </div>
                </RouterLink>

                <RouterLink to="/insertcard">
                    <div
                        class="flex flex-row justify-between border-2 border-top rounded-full w-[600px] py-3 px-10 font-bold text-lg shadow-xl">
                        <span>2 Unidades</span>

                        <span>R$ 8,80</span>
                    </div>
                </RouterLink>

                <RouterLink to="/insertcard">
                    <div
                        class="flex flex-row justify-between border-2 border-top rounded-full w-[600px] py-3 px-10 font-bold text-lg shadow-xl">
                        <span>3 Unidades</span>

                        <span>R$ 13,20</span>
                    </div>
                </RouterLink>

                <RouterLink to="/insertcard">
                    <div
                        class="flex flex-row justify-between border-2 border-top rounded-full w-[600px] py-3 px-10 font-bold text-lg shadow-xl">
                        <span>4 Unidades</span>

                        <span>R$ 17,60</span>
                    </div>
                </RouterLink>
            </div>

            <figure>
                <img src="../assets/bilheteqrcode.png" />
            </figure>
        </div>
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
        <PaymentServicesFooter />
    </main>
</template>