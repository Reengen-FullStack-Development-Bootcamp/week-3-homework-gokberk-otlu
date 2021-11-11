<template>
    <v-sheet class="p-5">
        <v-switch
        v-model="switchAuthority"
        inset
        color="#12b4c7"
        :label="switchAuthority ? 'Admin' : 'User'">
        </v-switch>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            switchAuthority: false
        }
    }
}
</script>