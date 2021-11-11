<template>
  <v-treeview :items="logItems"></v-treeview>
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