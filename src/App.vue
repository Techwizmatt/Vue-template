<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-4" color="primary"></v-avatar>

        <v-btn v-for="route in navigation" :key="route.name" :to="{ path: route.path }" text replace class="mr-2">
          {{ route.name }}
        </v-btn>

        <v-spacer/>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    navigation: []
  }),
  mounted () {
    this.navigation = this.$router.getRoutes().filter(route => route.meta.showOnNavbar !== undefined ? route.meta.showOnNavbar : false)
  }
}
</script>

<style lang="scss">
@import '@/stylesheet/index.scss';
</style>
