<!--This page display a random idea from the checklist that has not been marked as completed-->
<template>
  <v-container>
    <v-row>
      <v-col cols="0" md="3"></v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-toolbar color="blue">
            <v-toolbar-title class="display-1 white--text">Random Idea</v-toolbar-title>
          </v-toolbar>
          <p v-if="availableIdeas.length > 0" class="text-center mt-5 display-1">{{fullList[randomCatIndex].content[randomIdeaIndex].value}}</p>
          <!--Displays a message if all the ideas on the checklist have been completed-->
          <p v-else class="text-center mt-5 display-1">{{endPhrase}}</p>
          <v-row>
            <v-col>
              <v-btn color="primary" :large="$vuetify.breakpoint.lgAndUp" class="ml-4" @click="calculateNewRandomIndex" :disabled="availableIdeas.length < 2">Show another</v-btn>
            </v-col>
              <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>
            <v-col>
              <v-btn color="success" :large="$vuetify.breakpoint.lgAndUp" @click="markCompleted" :disabled="availableIdeas.length === 0">Completed</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  // This picks a random idea to start with
  created() {
    this.calculateNewRandomIndex();
  },
  computed: {
    fullList () {
      return this.$store.state.fullList;
    },
    availableIdeas() {
      // This creates an array pointing to all of the ideas
      // that have not been completed, for more efficient access
      const ideaArray = []
      for (let i = 0; i < this.fullList.length; i++) {
        for (let j = 0; j < this.fullList[i].content.length; j++) {
          if(this.fullList[i].content[j].status === false) {
            ideaArray.push({catIndex: i, ideaIndex: j});
          }
        }
      }
      return ideaArray;
    }
  },
  data() {
    return {
      randomCatIndex: null,
      randomIdeaIndex: null,
      lastRandomIdea: null,
      endPhrase: "You have completed everything on the checklist!"
    }
  },
  methods: {
    calculateNewRandomIndex() {
      if (this.availableIdeas.length <= 0){
        return;
      }
      // Pick a random idea
      let newIdea = Math.floor(Math.random() * Math.floor(this.availableIdeas.length))
      // Make sure it's not the same as the last idea
      while(this.lastRandomIdea === newIdea){
        newIdea = Math.floor(Math.random() * Math.floor(this.availableIdeas.length))
      }
      this.lastRandomIdea = newIdea;
      this.randomCatIndex = this.availableIdeas[newIdea].catIndex;
      this.randomIdeaIndex = this.availableIdeas[newIdea].ideaIndex;
    },
    markCompleted() {
      this.$store.dispatch('changeStatusAction', {ideaIndex: this.randomIdeaIndex, catIndex: this.randomCatIndex});
      this.calculateNewRandomIndex();
    }
  }
}
</script>