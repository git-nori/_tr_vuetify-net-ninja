<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-row>
        <v-col sm="6" md="4" lg="3" v-for="(person, index) in team" :key="index">
          <v-card class="text-center">
            <v-responsive class="pt-3">image goes here</v-responsive>
            <v-card-text>
              <div class="subheading text--primary">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text small color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>MESSAGE</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer" },
        { name: "Ryu", role: "Graphic designer" },
        { name: "Chun Li", role: "Web developer" },
        { name: "Gouken", role: "Social media maverick" },
        { name: "Yoshi", role: "Sales guru" }
      ]
    };
  }
};
</script>

<style scoped>
</style>