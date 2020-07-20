import { recipesService } from '../services'

export default {
    state: {
        recipes: [],
    },
    mutations: {
        updateRecipes(state, recipes) {
            state.recipes = recipes
        },
    },
    actions: {
        async fetchRecipes({ commit }) {
            commit('changeLoadingState', true)
            let recipes = await recipesService.fetchAllRecipes()
            commit('updateRecipes', recipes)
            commit('changeLoadingState', false)
        },
        async restoreRecipes({ dispatch }) {
            await recipesService.restoreRecipes()
            await dispatch('fetchRecipes')
        },
    },
    getters: {
        getRecipeByName: state => name => {
            return state.recipes.find(recipes => recipes.name === name)
        },
    },
}
