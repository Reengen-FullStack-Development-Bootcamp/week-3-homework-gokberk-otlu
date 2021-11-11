<template>
    <v-app>
        <Navbar />
        <!-- <Search /> -->
        <candle-stick />
    </v-app>
</template>

<script>
import CandleStick from '../components/CandleStick.vue'
import Navbar from '../components/Navbar.vue'
// import Search from '../components/Search.vue'
export default {
    data() {
        return {
            // apiData: null,
            timeType: 'DAILY',
            // timeType: 'WEEKLY',
            // timeType: 'MONTHLY'
        }
    },
    mounted() {
        // this.$store.dispatch('fetchApiData', this.timeType);
    },
    components: {
        CandleStick,
        Navbar,
        // Search
    }
}
</script>