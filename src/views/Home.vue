<template>
  <div class="home">
    <h1>This is a home page</h1>
    <!-- mdサイズ以下の場合は非表示 -->
    <v-btn class="hidden-md-and-down">hidden-md-and-down</v-btn>
    <!-- mdサイズ以上の場合は非表示 -->
    <v-btn class="hidden-md-and-up pink">hidden-md-and-up</v-btn>
    <!-- smサイズの場合のみ非表示 -->
    <v-btn class="hidden-sm-only">hidden-sm-only</v-btn>
  </div>
</template>

<script>
export default {};
</script>
