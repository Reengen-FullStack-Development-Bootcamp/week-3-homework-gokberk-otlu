<template>
    <v-btn-toggle v-model="timeSeriesText" tile color="deep-purple accent-3" group class="mb-10">
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
        timeSeriesText() {
            this.$store.dispatch('fetchApiData', this.timeSeriesText);
        }
    }
}
</script>