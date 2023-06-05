<script>
    export default {
        data() {
            return {
                timestamp: '',
                date: '',
            }
        },
        methods: {
            getCurrentDateInfo () {
                const currentDate = new Date();
                const currentDateWithFormat = `${currentDate.toLocaleDateString()}`;
                const currentTimeWithFormat = `${currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false})}`;

                this.date = currentDateWithFormat;
                this.timestamp = currentTimeWithFormat;
            }
        },
        mounted() {
            setInterval(() => { this.getCurrentDateInfo() }, 1000);
        }
    }
</script>

<template>
    <footer class="absolute bottom-0 flex justify-between items-center border-2 shadow-2xl px-20 py-4 text-2xl w-full">
        <span>{{ date }} {{ timestamp }}</span>

        <div class="flex flex-row items-center">
            <span class="mr-5">Bandeiras aceitas:</span>

            <figure class="flex flex-row gap-x-3">
                <img src="../assets/elo-logo.png" title="Elo - Logo" class="h-10"/>
                <img src="../assets/mastercard.jpg" title="Mastercard - Logo" class="h-10"/>
                <img src="../assets/visa.jpg" title="Visa - Logo" class="h-10"/>
            </figure>
        </div>
    </footer>
</template>