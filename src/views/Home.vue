<template>
  <div class="home">
    <h1>This is a home page</h1>

    <!-- 2つとも効果は同じ -->
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn color="pink" dark>click me</v-btn>

    <!-- 背景色は変化するが、影は持ちません。 -->
    <v-btn color="pink" depressed>click me</v-btn>
    <!-- text => 影と背景色を持たない、ホバーした時のみに、ボタンの形状が表示 -->
    <v-btn text color="pink">click me</v-btn>

    <v-btn class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn small class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn fab class="purple white--text">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
