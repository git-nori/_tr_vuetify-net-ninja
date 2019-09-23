<template>
  <v-app class="grey lighten-4">
    <navbar />
    <!-- x方向とbottomに16px(4 * 4px)のmarginを適用 -->
    <v-content class="mx-4 mb-4">
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
