<template>
    <v-row>
        <v-container>
            <v-treeview dense hoverable :items="logItems"></v-treeview>
        </v-container>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                logItems: this.$store.getters.getLogRecords
            }
        }
    }
</script>