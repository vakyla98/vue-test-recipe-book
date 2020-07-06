<template>
    <div>
        <transition name="fade-fast" mode="out-in">
            <loading-layout v-if="isLoading">
                Wait please, updating data.
            </loading-layout>
        </transition>
        <div class="main-pame">
            <transition name="fade" mode="out-in">
                <add-recipe v-if="isAdding" @cancel="toggleAddingRecipe" />
                <div v-else>
                    <v-btn
                        class="addRecipe-btn mb-2"
                        color="yellow darken-3"
                        @click="toggleAddingRecipe"
                        >Add recipe</v-btn
                    >
                    <active-recipe
                        class="mb-5"
                        :recipe="activeRecipe"
                        v-if="activeRecipe.name"
                        @clearActiveRecipe="activeRecipe = recipes[0]"
                    />
                </div>
            </transition>
            <div class="recipes-list" v-if="recipes.length">
                <recipe-card
                    class="recipe-card"
                    v-for="recipe in recipes"
                    :recipe="recipe"
                    :key="recipe.name"
                    @changeActiveRecipe="changeActiveRecipe"
                />
            </div>
        </div>
    </div>
</template>
<script>
import RecipeCard from '../components/RecipeCard.vue'
import ActiveRecipe from '../components/ActiveRecipe.vue'
import AddRecipe from '../components/AddRecipe.vue'
import LoadingLayout from '../components/LoadingLayout.vue'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'MainPage',
    components: {
        RecipeCard,
        ActiveRecipe,
        AddRecipe,
        LoadingLayout,
    },
    data() {
        return {
            activeRecipe: {},
            isAdding: false,
        }
    },
    computed: {
        ...mapState({
            recipes: state => state.recipes.recipes,
            isLoading: state => state.isLoading,
        }),
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        changeActiveRecipe(newActive) {
            this.activeRecipe = newActive
        },
        toggleAddingRecipe() {
            this.isAdding = !this.isAdding
        },
    },
    async created() {
        await this.fetchRecipes()
        this.activeRecipe = this.recipes[0]
    },
}
</script>
