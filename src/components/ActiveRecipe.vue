<template>
    <transition name="fade" mode="out-in">
        <div class="active-recipe">
            <div class="recipe" @click="$emit('changeActiveHandler', recipe)">
                <img class="img" :src="recipe.image" />
                <button @click="isChanging = !isChanging">Edit</button>
                <div v-if="isChanging">
                    <input v-model="recipe.name" />
                    <input v-model="recipe.text" />
                    <input v-model.lazy="recipe.image" />
                </div>
                <div v-else>
                    <p v-text="recipe.name" />
                    <p v-text="recipe.text" />
                </div>

                <ingredients-list :ingredients="recipe.ingredients" />
                <add-ingredient :ingredients="recipe.ingredients" />

                <button @click="saveRecipe">Save recipe</button>
                <button @click="deleteRecipe">Delete recipe</button>
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
<style lang="scss">
.ing {
    border: 3px solid red;
}
.active-recipe {
    background-color: gray;
    border: 2px solid black;
    margin: 5px;
    padding: 5px;
    .img {
        width: 100%;
    }
}
</style>
