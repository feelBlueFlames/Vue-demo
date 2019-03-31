import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import modules from './modules'
import actions from './actions'
Vue.use(Vuex)
export default new Vuex.Store({
    strict: process.env.NODE_ENF !== 'production',
    state,
    getters,
    actions,
    modules
}) 