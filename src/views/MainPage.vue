<template>
    <div>
        <div v-if="isLoading">Wait loading</div>
        <div class="list" v-else>
            <recipe-card
                v-for="recipe in recipes"
                :recipe="recipe"
                :key="recipe.name"
                @changeActiveHandler="changeActiveRecipe"
            />
            <button @click="toggleModal">Add recipe</button>
            <add-recipe v-if="isAdding" @cancel="toggleModal" />
            <active-recipe :recipe="activeRecipe" v-if="activeRecipe.name" />
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
            console.log(this.recipes)
        },
    },
    async created() {
        await this.fetchRecipes()
    },
}
</script>
<style lang="scss">
.list {
    display: flex;
}
</style>
