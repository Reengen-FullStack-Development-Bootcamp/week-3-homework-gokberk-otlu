<template>
    <v-app>
        <Navbar />
        <candle-stick />
    </v-app>
</template>

<script>
import CandleStick from '../components/CandleStick.vue'
import Navbar from '../components/Navbar.vue'
export default {
    components: {
        CandleStick,
        Navbar,
    }
}
</script>