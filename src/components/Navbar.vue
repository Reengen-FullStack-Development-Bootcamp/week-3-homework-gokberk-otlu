<template>
    <div>
        <v-row>
            <v-col class="col-md-6">
                <Search />
            </v-col>
            <v-col class="offset-md-3 d-flex align-center">
                <v-btn class="mr-4"
                elevation="2"
                @click="goToLogsPage">
                    Logs
                </v-btn>
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
    },
    methods: {
        goToLogsPage() {
            if(this.$store.getters.getAuthority) {
                this.$router.push({ path: '/logs' });
            } else {
                let newRouteItem = {
                    name: `Unauthorized logs request - ${new Date().toLocaleString("en-US")}`
                };
                this.$store.commit('setLogRecords', newRouteItem);
            }
        }
    }
}
</script>