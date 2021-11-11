<template>
    <v-row data-app style="margin: 0; display: flex; justify-content: center;">
        <v-col class="col-lg-3 col-md-3 col-sm-4">
            <v-autocomplete
            :items="search"
            dense
            solo
            label="Search Symbol..."
            clearable
            >
            </v-autocomplete>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            search: ['ayberk', 'gokberk', 'esra']
        }
    }
}
</script>

<style>
    .mdi-close {
        font-size: 1rem !important;
    }
</style>