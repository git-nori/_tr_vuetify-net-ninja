<template>
  <v-dialog max-width="600px" v-model="dialog">
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
          <!-- loading => true, falseでloadingの表示,非表示をコントロール -->
          <v-btn text small class="mt-3 success" :loading="loading" @click="submit">ADD PROJECT</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// 日付に対しての処理を簡単にするライブラリ => date-fnsをインストール
// npm install date-fns --save
import format from "date-fns/format";
import db from "@/fb";

export default {
  data() {
    return {
      title: "",
      content: "",
      dueDate: "",
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      inputDateRules: [v => !!v || "Date is required"],
      loading: false,
      dialog: false
    };
  },
  methods: {
    // バリデーションを通ったデータをfirebaseに登録する
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true; // loadingを表示

        const project = {
          title: this.title,
          content: this.content,
          dueDate: this.dueDate,
          person: "Nori",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false; // loadingを非表示
            this.dialog = false; // dialogを非表示
          });
      }
    }
  }
};
</script>