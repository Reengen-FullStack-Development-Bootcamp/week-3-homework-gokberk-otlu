<template>
    <v-row data-app style="margin: 0; display: flex; justify-content: center;">
        <v-col class="col-lg-3 col-md-3 col-sm-4">
            <v-autocomplete
            :items="getMatches"
            no-filter
            dense
            solo
            label="Search Symbol..."
            clearable
            hide-no-data
            v-model="searchVal"
            :search-input.sync="searchInput"
            >
            </v-autocomplete>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
            searchInput: '',
            searchVal: '',
            selectionEvent: false
        }
    },
    methods: {
        ...mapMutations([
            'setSelectedMatchItem'
        ])
    },
    computed: {
        ...mapGetters([
            'getMatches'
        ])
    },
    watch: {
        searchVal() {
            // to prevent apiSearchData dispatch when any item selected
            this.selectionEvent = true;
            this.setSelectedMatchItem(this.searchVal);
            this.$store.dispatch('fetchApiData', 'DAILY');
            console.log("SELECTION");
        },
        searchInput() {
            // dispatch action to get matches
            if(!this.selectionEvent && this.searchInput && this.searchInput.length >= 3) {
                this.$store.dispatch('apiSearchData', this.searchInput);
                console.log('DISPATCH');
            }
            this.selectionEvent = false;
        }
    }
}
</script>

<style>
    .mdi-close {
        font-size: 1rem !important;
    }
</style>