<template>
    <transition name="fade" mode="out-in">
        <div
            class="active-recipe d-flex flex-column flex-sm-row pa-2 align-center align-sm-stretch"
            @click="$emit('changeActiveHandler', recipe)"
            :key="recipe.name"
        >
            <div class="active-recipe__about d-flex flex-column mr-0 mr-sm-3">
                <div v-if="isChanging">
                    <label class="input-label">
                        Recipe name
                        <input class="input  mb-2" v-model="recipe.name" />
                    </label>
                    <label class="input-label">
                        Image link
                        <input
                            class="input  mb-2"
                            v-model.lazy="recipe.image"
                        />
                    </label>
                </div>
                <div v-else>
                    <h2 class="name text-center mx-2" v-text="recipe.name" />
                </div>
                <img class="active-recipe__img mb-3" :src="recipe.image" />
                <textarea
                    class="input text"
                    rows="4"
                    v-model="recipe.text"
                    v-if="isChanging"
                />
                <p class="text" v-text="recipe.text" v-else />
            </div>
            <div class="active-recipe__ingredients ma-1">
                <ingredients-list :ingredients="recipe.ingredients" />
                <add-ingredient :ingredients="recipe.ingredients" />
                <div class="active-recipe__controls mt-5 mt-sm-auto">
                    <v-btn
                        class="edit-btn"
                        color="yellow darken-3"
                        @click="isChanging = !isChanging"
                        ><v-icon>mdi-pencil</v-icon></v-btn
                    >
                    <v-btn
                        class="ml-3"
                        color="yellow darken-3"
                        @click="saveRecipe"
                        ><v-icon>mdi-content-save</v-icon></v-btn
                    >
                    <v-btn
                        class="ml-3"
                        color="yellow darken-3"
                        @click="deleteRecipe"
                        ><v-icon>mdi-delete</v-icon></v-btn
                    >
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import AddIngredient from './AddIngredient'
import IngredientsList from './IngredientsList'
import { recipesService } from '../services'
import { mapActions } from 'vuex'
export default {
    name: 'ActiveCard',
    components: {
        AddIngredient,
        IngredientsList,
    },
    data() {
        return {
            ingredientName: '',
            ingredientCount: 1,
            isChanging: false,
        }
    },
    props: {
        recipe: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        async deleteRecipe() {
            await recipesService.deleteRecipe(this.recipe.key)
            this.fetchRecipes()
            this.$emit('clearActiveRecipe')
        },
        async saveRecipe() {
            await recipesService.saveRecipe(this.recipe)
            this.fetchRecipes()
        },
    },
}
</script>
