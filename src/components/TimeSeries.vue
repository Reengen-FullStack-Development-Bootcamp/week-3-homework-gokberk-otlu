<template>
    <v-btn-toggle v-model="getTimeSeries" tile color="deep-purple accent-3" group class="mb-10">
        <v-btn value="DAILY">
            DAILY
        </v-btn>

        <v-btn value="WEEKLY">
            WEEKLY
        </v-btn>

        <v-btn value="MONTHLY">
            MONTHLY
        </v-btn>
    </v-btn-toggle>
</template>

<script>
export default {
    data() {
        return {
            timeSeriesText: 'DAILY'
        }
    },
    watch: {
        '$store.state.timeSeries': function() {
            this.$store.dispatch('fetchApiData');
        }
    },
    computed: {
        getTimeSeries: {
            get() {
                return this.$store.getters.getTimeSeries;
            },
            set(value) {
                this.$store.commit('setTimeSeries', value)
            }
        }
    },
    
}
</script>