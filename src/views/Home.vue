<template>
    <div>
        <Search />
        <candle-stick />
    </div>
</template>

<script>
import CandleStick from '../components/CandleStick.vue'
import Search from '../components/Search.vue'
export default {
    data() {
        return {
            apiData: null,
            timeType: 'DAILY',
            // timeType: 'WEEKLY',
            // timeType: 'MONTHLY'
        }
    },
    mounted() {
        this.$store.dispatch('fetchApiData', this.timeType);
    },
    components: {
        CandleStick,
        Search
    }
}
</script>