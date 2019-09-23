<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <!-- y方向に20pxのmarginを適用 -->
    <!-- fluid => containerの幅を横いっぱいに広げる -->
    <v-container class="my-5" fluid>
      <p>https://github.com/iamshaunjp/vuetify-playlist/blob/lesson-12/todo-ninja/src/views/Team.vuehttps://github.com/iamshaunjp/vuetify-playlist/blob/lesson-12/todo-ninja/src/views/Team.vue</p>

      <!-- 2.0はこっち
      <v-row justify="center">
        <v-col md="12" sm="12">
          <v-btn block>12</v-btn>
        </v-col>
        <v-col md="12" sm="6">
          <v-btn block>6</v-btn>
        </v-col>
        <v-col md="12" sm="6">
          <v-btn block>6</v-btn>
        </v-col>
      </v-row>
      -->

      <!-- wrap => 12を超えたら改行する -->
      <v-layout row wrap justify-center>
        <v-flex md12 sm12>
          <v-btn block>12</v-btn>
        </v-flex>
        <v-flex md6 sm6>
          <v-btn block>6</v-btn>
        </v-flex>
        <v-flex md6 sm6>
          <v-btn block>6</v-btn>
        </v-flex>
        <v-flex md6 sm6>
          <v-btn block>6</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>