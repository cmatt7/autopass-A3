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
    <footer class="absolute bottom-0 flex justify-between border-2 shadow-2xl px-20 py-4 text-2xl w-full">
        <span>{{ date }} {{ timestamp }}</span>

        <figure>
            <img src="../assets/logo_top.png" title="TOP - Logo" class="h-8"/>
        </figure>
    </footer>
</template>