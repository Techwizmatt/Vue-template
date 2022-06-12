<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-4" color="primary"></v-avatar>

        <v-btn v-for="route in navigation" :key="route.name" :to="{ path: route.path }" text replace>
          {{ route.name }}
        </v-btn>

        <v-spacer/>

        <v-responsive max-width="260">
          <v-text-field dense hide-details rounded solo-inverted></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
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
