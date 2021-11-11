<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    $route(to, from) {
      // save logs for each success routing with authorized status
      let newRouteItem = {
        name: `Route Change - ${new Date().toLocaleString("en-US")}`,
        children: [
          { name: `From : ${from.fullPath}` },
          { name: `To : ${to.fullPath}` },
        ],
      };
      this.$store.commit('setLogRecords', newRouteItem);
    }
  }
}
</script>