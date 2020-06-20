<template>
    <div class="ingredients-list">
        <h3 class="text-center mb-2">Ingredient list</h3>
        <div class="ingredients">
            <div
                class="ingredient mb-2"
                v-for="(data, key) in ingredients"
                :key="key"
            >
                <input
                    class="ingredient__name"
                    type="text"
                    v-model.lazy="data.name"
                />
                <input
                    class="ingredient__counter"
                    type="number"
                    v-model.lazy="data.count"
                />
                <v-btn
                    :disabled='Object.keys(ingredients).length == 1' 
                    class="ingredient__del-btn"
                    color="yellow darken-3"
                    small
                    @click="deleteIngredient(key)"
                    ><v-icon class="ingredient__del-icon">mdi-plus-thick</v-icon></v-btn
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IngredientsList',
    props: {
        ingredients: Object,
    },
    methods: {
        deleteIngredient(key) {
            this.$delete(this.ingredients, key)
        },
    },
}
</script>

