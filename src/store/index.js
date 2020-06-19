import Vue from 'vue'
import Vuex from 'vuex'

import recipes from './recipes'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: true,
    },
    mutations: {
        changeLoadingState(state, loadingState) {
            state.isLoading = loadingState
        },
    },
    actions: {},
    modules: { recipes },
})
