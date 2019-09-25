<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{on}">
      <v-btn small v-on="on">Add new Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline text-uppercase">Add a New Project</span>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="title" prepend-icon="mdi-folder" v-model="title"></v-text-field>
          <v-textarea label="infomation" prepend-icon="mdi-pencil" v-model="content"></v-textarea>
          <v-btn text small class="mt-3 success" @click="submit">ADD PROJECT</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    }
  }
};
</script>