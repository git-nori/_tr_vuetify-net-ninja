<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <!-- y方向に20pxのmarginを適用 -->
    <!-- fluid => containerの幅を横いっぱいに広げる -->
    <v-container class="my-5" fluid>
      <v-row justify-start class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon small left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon small left>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-row>

      <v-card flat v-for="(project, index) in projects" :key="index">
        <!-- ``を用いてclassをv-bindする -->
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col sm="12" md="6">
            <div class="caption grey--text">ProjectTitle</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <!-- v-col内の要素を上下左右中央に配置 -->
          <v-col sm="4" md="2" class="d-flex align-center justify-center">
            <div>
              <v-chip small :class="`${project.status}`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <!-- rowごとに区切り線を設定 -->
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1)); //propに応じたソートを行う
    }
  },
  created() {
    //firebaseのprojectsデーブルに変化があれば、projects(配列)にデータを追加
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid lightblue;
}
.project.overdue {
  border-left: 4px solid pink;
}
.project.ongoing {
  border-left: 4px solid lightseagreen;
}

/* .v-chip.${project.status}だとbackgroundが上書きされてしまう */
.theme--light.v-chip.complete {
  background: lightblue;
}
.theme--light.v-chip.overdue {
  background: pink;
}
.theme--light.v-chip.ongoing {
  background: lightseagreen;
}
</style>