<!--A checklist that displays all of the ideas sorted by category-->
<template>
  <v-container>
    <v-row>
      <!--Loops through list array to display each category-->
      <v-col v-for="(element, catIndex) in fullList" :key="catIndex" cols="12" md="6">
        <v-card class="mx-auto mt-4">
          <v-toolbar color="blue">
            <v-toolbar-title class="display-1 white--text">{{element.category}}</v-toolbar-title>
          </v-toolbar>
          <!--Loops through the subarray in each category to display the ideas-->
          <v-list>
            <v-list-item-group v-for="(idea, ideaIndex) in element.content" :key="ideaIndex" multiple>
              <v-list-item @click.stop="checkBox(ideaIndex, catIndex)">
                <v-list-item-action>
                  <v-checkbox @click.stop="checkBox(ideaIndex, catIndex)" v-model="idea.status"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{idea.value}}</v-list-item-title>
                </v-list-item-content>
                <!--If the idea was added by the user, it can be deleted-->
                <span v-if="idea.custom"><v-icon v-on:click.stop="removeIdea(ideaIndex, catIndex)">mdi-close</v-icon></span>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <!--AddToList component for adding new ideas to the checklist-->
    <AddToList></AddToList>
  </v-container>
</template>

<script>
import AddToList from '@/components/AddToList.vue';

export default {
  components: {
    AddToList
  },
  computed: {
    fullList () {
      return this.$store.state.fullList;
    }
  },
  methods: {
    checkBox(ideaIndex, catIndex){
      this.$store.dispatch('changeStatusAction', {ideaIndex, catIndex});
    },
    removeIdea(ideaIndex, catIndex){
      this.$store.dispatch('removeIdeaAction', {ideaIndex, catIndex});
    }
  }
}
</script>