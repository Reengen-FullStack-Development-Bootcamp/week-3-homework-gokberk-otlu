<template>
    <div>
        <v-switch
        v-model="switchAuthority"
        inset
        :label="`switchAuthority: ${switchAuthority.toString()}`">
        </v-switch>
        <!-- <p>asdfasdf</p> -->
    </div>
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