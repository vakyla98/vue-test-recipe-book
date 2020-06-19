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
        async fetchRecipes(ctx) {
            ctx.commit('changeLoadingState', true)
            let recipes = await recipesService.getAllRecipes()
            ctx.commit('updateRecipes', recipes)
            ctx.commit('changeLoadingState', false)
        },
    },
    getters: {
        getRecipeByName: state => name => {
            return state.recipes.find(recipes => recipes.name === name)
        },
    },
}
