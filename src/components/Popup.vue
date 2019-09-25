<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{on}">
      <v-btn small v-on="on">Add new Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>