<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- 文字を大文字にし、文字色をグレーにする -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <!-- v-btnが右寄せになるようにスペースを入れる -->
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <!-- offset-y => 下方向にdropdown menuを表示 -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="grey">
            <span>MENU</span>
            <v-icon right>mdi-chevron-double-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" :to="link.route">
            <v-list-item-title class="caption">{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-row>
        <v-col class="d-flex justify-center mt-5">
          <v-avatar size="75">
            <img src="/avator-img/avatar-5.png" />
          </v-avatar>
        </v-col>
      </v-row>
      <span class="d-flex justify-center white--text">Yoshi</span>

      <v-row>
        <v-col class="d-flex justify-center">
          <popup />
        </v-col>
      </v-row>

      <v-list class="primary">
        <!-- ':to' => 内部リンクを設定(':href' => 外部リンク) -->
        <v-list-item v-for="(link, index) in links" :key="index" :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ]
    };
  },
  components: {
    Popup
  }
};
</script>