<template>
    <div>
        <transition name="fade-fast" mode="out-in">
            <loading-layout v-if="isLoading">
                Wait please, updating data.
            </loading-layout>
        </transition>
        <div class="main-page">
            <transition name="fade" mode="out-in">
                <add-recipe v-if="isAdding" @cancel="cancelRecipeForm" />
                <div v-else>
                    <div class="main-page__controll">
                        <v-btn
                            class="addRecipe-btn mb-2"
                            color="yellow darken-3"
                            @click="toggleAddingRecipe"
                        >
                            Add recipe
                        </v-btn>
                        <input
                            type="text"
                            class="input"
                            placeholder="Search recipe"
                            v-model="searchText"
                        />
                    </div>

                    <active-recipe
                        class="mb-5"
                        :recipe="activeRecipe"
                        v-if="activeRecipe.ingredients"
                        @deleting="setActiveRecipe"
                    />
                </div>
            </transition>
            <div class="recipes-list" v-if="recipes.length">
                <recipe-card
                    class="recipe-card"
                    v-for="recipe in searchRecipes"
                    :recipe="recipe"
                    :key="recipe.image"
                    @changeActiveRecipe="changeActiveRecipe"
                />
            </div>
            <restore-recipes
                @restore="setActiveRecipe"
                v-show="!recipes.length"
            />
        </div>
    </div>
</template>
<script>
import RecipeCard from '../components/RecipeCard.vue'
import ActiveRecipe from '../components/ActiveRecipe.vue'
import AddRecipe from '../components/AddRecipe.vue'
import LoadingLayout from '../components/LoadingLayout.vue'
import RestoreRecipes from '../components/RestoreRecipes.vue'

import { mapActions, mapState } from 'vuex'
export default {
    name: 'MainPage',
    components: {
        RecipeCard,
        ActiveRecipe,
        AddRecipe,
        LoadingLayout,
        RestoreRecipes,
    },
    data() {
        return {
            activeRecipe: {},
            isAdding: false,
            searchText: '',
        }
    },
    computed: {
        ...mapState({
            recipes: state => state.recipes.recipes,
            isLoading: state => state.isLoading,
        }),
        searchRecipes() {
            console.log()
            return this.recipes.filter(el =>
                el.name.toLowerCase().includes(this.searchText.toLowerCase())
            )
        },
    },
    methods: {
        ...mapActions('recipes', ['fetchRecipes']),
        changeActiveRecipe(newActive) {
            this.activeRecipe = newActive
        },
        toggleAddingRecipe() {
            this.isAdding = !this.isAdding
        },
        cancelRecipeForm() {
            this.toggleAddingRecipe()
            this.setActiveRecipe()
        },
        setActiveRecipe() {
            if (this.searchRecipes.length) {
                this.activeRecipe = this.searchRecipes[0]
            } else {
                this.activeRecipe = {}
            }
        },
    },
    watch: {
        searchText: function(){
            this.setActiveRecipe()
        },
    },
    async created() {
        await this.fetchRecipes()
        this.setActiveRecipe()
    },
}
</script>
