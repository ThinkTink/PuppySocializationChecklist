<!--A component that allows the user to add ideas to the checklist -->
<template>
<div>
  <v-row>
    <v-col>
      <v-card>
        <v-form ref="addToList" v-model="formValidity">
          <v-toolbar color="blue">
            <v-toolbar-title class="display-1 white--text">Add an Idea</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field v-model.trim="inputIdea" :rules="inputIdeaRules" label="New idea for checklist" clearable></v-text-field>
            <v-select :items="categories" v-model="inputCategory" :rules="inputCategoryRules" label="Category"></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-on:click="addIdea" color="success" :disabled="!formValidity">Add to Checklist</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>


<script>
export default {
  computed: {
    fullList () {
      return this.$store.state.fullList;
    },
    // This pulls out just the categories from the fullList
    categories: function() {
      const catArray = [];
      this.fullList.forEach(list => catArray.push(list.category));
      return catArray;
    }
  },
  data() {
    return {
      // Form input is empty when page loads
      inputIdea: '',
      inputCategory: null,
      // Rules to validate the user's input
      inputIdeaRules: [
        value => !!value || 'Please enter an idea to add.',
        value => value.length<32 || 'Your idea is too long.',
        value => !/[^a-zA-Z0-9 ']/.test(value) || 'Idea cannot contain special characters.'
      ],
      inputCategoryRules: [
        value => !!value || 'Please select a category.'
      ],
      formValidity: false
    }
  },
  methods: {
    addIdea() {
      // Find the index of the selected category
      const catIndex = this.categories.indexOf(this.inputCategory);
      // Add the new idea to the fullList
      if(catIndex !== -1){
        this.$store.dispatch('addIdeaAction', {idea: this.inputIdea, catIndex});
      }
      // Reset the form
      this.$refs.addToList.reset();
    }
  }
}
</script>