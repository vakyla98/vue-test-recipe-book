<template>
    <div class="ingredients-list">
        <h3 class="text-center mb-2">Ingredient list</h3>
        <div class="ingredients">
            <transition-group name="fade" mode="out-in">
                <Ingredient
                    class="ingredient mb-2"
                    v-for="(ingredient, key) in ingredients"
                    :ingredient="ingredient"
                    :key="key.toString()"
                    :ingredientsAmount="ingredientsAmount"
                    @delete="deleteIngredient"
                ></Ingredient>
            </transition-group>
        </div>
    </div>
</template>
<script>
import Ingredient from './Ingredient'
export default {
    name: 'IngredientsList',
    components: {
        Ingredient,
    },
    props: {
        ingredients: {
            type: Object,
            required: true,
        },
    },
    methods: {
        deleteIngredient(key) {
            this.$delete(this.ingredients, key)
        },
    },
    computed: {
        ingredientsAmount() {
            return Object.keys(this.ingredients).length
        },
    },
}
</script>
