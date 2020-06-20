<template>
    <transition name="fade" mode="out-in">
        <div
            class="active-recipe"
            @click="$emit('changeActiveHandler', recipe)"
        >
            <img class="active-recipe__img" :src="recipe.image" />
            <div class="active-recipe__data">
                <v-btn color="yellow darken-3" @click="isChanging = !isChanging"
                    >Edit</v-btn
                >
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

                <v-btn color="yellow darken-3" @click="saveRecipe"
                    >Save recipe</v-btn
                >
                <v-btn color="yellow darken-3" @click="deleteRecipe"
                    >Delete recipe</v-btn
                >
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
    display: flex;
    align-items: center;
    font-size:14px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    &__img {
        max-height: 250px;
    }
    &__data {
    }
}
</style>
