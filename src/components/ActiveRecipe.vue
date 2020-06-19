<template>
    <transition name="fade" mode="out-in">
        <div class="active-recipe">
            <div class="recipe" @click="$emit('changeActiveHandler', recipe)">
                <img class="img" :src="recipe.image" />
                <p class="">
                    {{ recipe.name }}
                </p>
                <p class="">
                    {{ recipe.text }}
                </p>
                <p v-for="(value, name) in recipe.ingredients" :key="name">
                    {{ name }},{{ value }}
                </p>
                <button @click="deleteRecipe">Delete</button>
            </div>
        </div>
    </transition>
</template>
<script>
import { recipesService } from '../services'
import { mapActions } from 'vuex'
export default {
    name: 'ActiveCard',
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
        },
    },
}
</script>
<style lang="scss">
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
