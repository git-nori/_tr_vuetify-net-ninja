<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <!-- [選択時のオプション]accodion => panel間を繋げる, focusable => 選択中のpanelのbgをgreyにする -->
      <v-expansion-panels accordion focusable>
        <v-expansion-panel v-for="(project, index) in myProjects" :key="index">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="grey--text">
                <div class="font-weight-bold">{{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
  computed: {
    // projectsの中でproject.person === 'Yoshi'のデータのみを絞り込み返す
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Yoshi";
      });
    }
  },
  created() {
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
</style>