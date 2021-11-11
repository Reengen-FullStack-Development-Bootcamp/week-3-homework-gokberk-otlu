<template>
    <div>
        <v-row>
            <v-col class="col-md-6">
                <Search />
            </v-col>
            <v-col class="offset-md-4">
                <AuthoritySwitch />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Search from './Search.vue'
import AuthoritySwitch from './AuthoritySwitch.vue'
export default {
    components: {
        Search,
        AuthoritySwitch
    }
}
</script>