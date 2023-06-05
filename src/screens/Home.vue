<script>
import InfoFooter from '../components/InfoFooter.vue';

export default {
    components: { InfoFooter }
}
</script>

<template>
    <RouterLink to="/select">
        <main class="flex flex-col justify-center items-center w-full h-screen gap-2">
            <figure class="my-10">
                <img src="../assets/logo_top.png" title="TOP - Logo" class="h-[130px]" />
            </figure>

            <h1 class="text-[80px] font-extrabold">Seja bem-vindo!</h1>
            <h3 class="text-5xl font-extrabold text-top">Toque para iniciar</h3>

            <figure class="flex flex-col justify-center items-center my-5">
                <img src="../assets/top_qr_code.png" title="TOP - QR Code" class="h-64" />

                <span>Baixe nosso aplicativo</span>
            </figure>

            <InfoFooter />
        </main>
    </RouterLink>
</template>