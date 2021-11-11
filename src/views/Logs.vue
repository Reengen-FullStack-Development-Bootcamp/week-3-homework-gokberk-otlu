<template>
    <div>
        <v-app-bar>
            <v-toolbar-title>
                <span @click="goToHomePage" class="home-navigator">
                    Home Page
                </span>
            </v-toolbar-title>
        </v-app-bar>
        <LogsTreeView />
    </div>
</template>

<script>
import LogsTreeView from '../components/LogsTreeView.vue'
export default {
    components: {
        LogsTreeView
    },
    methods: {
        goToHomePage() {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style>
    .home-navigator {
        font-weight: bold;
        color: #444;
        cursor: pointer;
    }
</style>