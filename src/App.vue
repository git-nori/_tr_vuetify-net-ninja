<template>
  <v-app class="grey lighten-4">
    <navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>
