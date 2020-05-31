import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
  state: {
    fullList: [
      { category: "Sights",
        content: [
          {value: "See someone in a hat",
          status: false,
          custom: false},
          {value: "See someone in boots",
          status: false,
          custom: false},
          {value: "See someone wearing glasses",
          status: false,
          custom: false}
        ]
      },
      {
        category: "Sounds",
        content: [
          {value: "Hear the sound of thunder",
          status: false,
          custom: false},
          {value: "Hear the sound of a doorbell",
          status: false,
          custom: false},
          {value: "Hear the sound of a vacuum",
          status: false,
          custom: false}
        ]
      },
      {
        category: "Surfaces",
        content: [
          {value: "Walk on carpet",
          status: false,
          custom: false},
          {value: "Walk on hardwood floor",
          status: false,
          custom: false},
          {value: "Walk on concrete",
          status: false,
          custom: false}
        ]
      },
      {
        category: "Miscellaneous",
        content: [
          {value: "Encounter another puppy",
          status: false,
          custom: false},
          {value: "Encounter an adult dog",
          status: false,
          custom: false},
          {value: "Encounter a cat",
          status: false,
          custom: false}
        ]
      }
    ]
    },
  mutations: {
    // Loads data, currently from local storage
    loadSavedData(state){
      if(localStorage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
      }
    },
    addIdea(state, payload) {
      state.fullList[payload.catIndex].content.push({ value: payload.idea, status: false, custom: true});
    },
    changeStatus(state, payload){
      state.fullList[payload.catIndex].content[payload.ideaIndex].status = !state.fullList[payload.catIndex].content[payload.ideaIndex].status;
    },
    removeIdea(state, payload) {
      state.fullList[payload.catIndex].content.splice(payload.ideaIndex, 1);
    }
  },
  actions: {
    addIdeaAction({commit}, params) {
      commit('addIdea', {
        idea: params.idea,
        catIndex: params.catIndex
      })
    },
    changeStatusAction({commit}, params) {
      commit('changeStatus', {
        ideaIndex: params.ideaIndex,
        catIndex: params.catIndex
      })
    },
    removeIdeaAction({commit}, params) {
      commit('removeIdea', {
        ideaIndex: params.ideaIndex,
        catIndex: params.catIndex
      })
    }
  }
})

// Every time a change is made, update the local storage
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});
  
export default store;