import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    step:[
      {
        titre: "Design",
        contenue: []
      },  
      {
        titre: "Prototype",
        contenue: []
      },
      {
        titre: "Testing",
        contenue: []
      },
      {
        titre: "Final",
        contenue: []
      },
    ]      
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
