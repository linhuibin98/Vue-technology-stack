import Vue from "vue";
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getters'
import saveInLocal from "./plugin/saveInLocal";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [saveInLocal]
})