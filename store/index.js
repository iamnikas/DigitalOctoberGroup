import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    news: []
  },
  getters: {
    news (state) {
      return state.news
    },
  },
  mutations: {
    SET_NEWS (state, data) {
      state.news = data
    },
  },
  actions: {
    setNews ({ commit }, news) {
      console.log('actions news:', news)
      commit('SET_NEWS', news)
    },
  }
})

export default store
