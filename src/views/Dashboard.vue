<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <!-- y方向に20pxのmarginを適用 -->
    <!-- fluid => containerの幅を横いっぱいに広げる -->
    <v-container class="my-5" fluid>
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
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
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