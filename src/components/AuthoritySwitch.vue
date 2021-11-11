<template>
    <v-sheet class="p-5">
        <v-switch
        v-model="getAuthority"
        inset
        color="#12b4c7"
        :label="getAuthority ? 'Admin' : 'User'">
        </v-switch>
    </v-sheet>
</template>

<script>
export default {
    computed: {
        getAuthority: {
            get() {
                return this.$store.getters.getAuthority;
            },
            set(value) {
                this.$store.commit('setAuthority', value)
            }
        }
    },
}
</script>