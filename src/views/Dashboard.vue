<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <!-- y方向に20pxのmarginを適用 -->
    <!-- fluid => containerの幅を横いっぱいに広げる -->
    <v-container class="my-5" fluid>
      <v-card flat>
        <v-row>
          <v-col sm="12" md="6">
            <div class="caption grey--text">ProjectTitle</div>
            <div>ProjectTitle</div>
          </v-col>
          <v-col sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>The Nori</div>
          </v-col>
          <v-col sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>1st Jun 2019</div>
          </v-col>
          <v-col sm="4" md="2">
            <div class="caption grey--text">Status</div>
            <div>ongoing</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
