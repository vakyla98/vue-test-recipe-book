<template>
    <div>
        <v-btn color="yellow darken-3" @click="toggleModal">Add recipe</v-btn>
        <div v-if="isLoading">Wait loading</div>
        <div v-else>
            <active-recipe
                :recipe="activeRecipe"
                v-if="activeRecipe.name"
                @clearActiveRecipe="activeRecipe = {}"
            />

            <div class="recipes-list">
                <recipe-card
                    class="recipe-card"
                    v-for="recipe in recipes"
                    :recipe="recipe"
                    :key="recipe.name"
                    @changeActiveHandler="changeActiveRecipe"
                />
            </div>
            <add-recipe v-if="isAdding" @cancel="toggleModal" />
        </div>
    </div>
</template>
<script>
import RecipeCard from '../components/RecipeCard.vue'
import ActiveRecipe from '../components/ActiveRecipe.vue'
import AddRecipe from '../components/AddRecipe.vue'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'MainPage',
    components: {
        RecipeCard,
        ActiveRecipe,
        AddRecipe,
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
        toggleModal() {
            this.isAdding = !this.isAdding
        },
    },
    created() {
        this.fetchRecipes()
    },
}
</script>
<style lang="scss">
.recipes-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
}
.add-recipe {
    background-color: green;
    color: red;
}
</style>
