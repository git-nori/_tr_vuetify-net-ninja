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
        <!-- ref => formを$refsで参照するため -->
        <v-form class="px-3" ref="form">
          <v-text-field label="title" prepend-icon="mdi-folder" :rules="inputRules" v-model="title"></v-text-field>
          <v-textarea
            label="infomation"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
            v-model="content"
          ></v-textarea>
          <v-menu>
            <template v-slot:activator="{on}">
              <v-text-field
                label="Due date"
                prepend-icon="mdi-calendar"
                :value="dueDate"
                v-on="on"
                :rules="inputDateRules"
                required
              ></v-text-field>
            </template>
            <v-date-picker v-model="dueDate"></v-date-picker>
          </v-menu>
          <v-btn text small class="mt-3 success" @click="submit">ADD PROJECT</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// 日付に対しての処理を簡単にするライブラリ => date-fnsをインストール
// npm install date-fns --save
import format from "date-fns/format";

export default {
  data() {
    return {
      title: "",
      content: "",
      dueDate: "",
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      inputDateRules: [v => !!v || "Date is required"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content, this.dueDate);
      }
    }
  }
};
</script>