<template>
  <v-app>
    <v-app-bar color="blue" dark app>
      <v-btn text rounded to="/">Checklist</v-btn>
      <v-btn text rounded to="/random">Random Idea</v-btn>
      <v-btn text rounded to="/about">About</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer padless app>
      <v-col class="text-center" cols="12">
      {{new Date().getFullYear()}} — <strong>ThinkTink</strong> —<v-btn icon href="https://github.com/ThinkTink/PuppySocializationChecklist"><v-icon>mdi-github</v-icon></v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
