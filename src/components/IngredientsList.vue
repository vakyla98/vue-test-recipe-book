<template>
    <div class="ingredients-list">
        <h3 class="text-center mb-2">Ingredient list</h3>
        <div class="ingredients">
            <transition-group name="fade" mode="out-in">
                <div
                    class="ingredient mb-2"
                    v-for="(data, key) in ingredients"
                    :key="key.toString()"
                >
                    <input
                        class="ingredient__name"
                        type="text"
                        v-model.lazy="data.name"
                    />
                    <input
                        class="ingredient__counter px-2"
                        type="number"
                        v-model.lazy="data.count"
                    />
                    <select
                        v-model="data.type"
                        class="ingredient__type mr-5 ml-2"
                    >
                        <option>g.</option>
                        <option>ml.</option>
                        <option>cup</option>
                        <option>tsp.</option>
                        <option>tbsp.</option>
                        <option>piece</option>
                    </select>
                    <v-btn
                        :disabled="Object.keys(ingredients).length == 1"
                        class="ingredient__del-btn mr-3"
                        color="yellow darken-3"
                        small
                        @click="deleteIngredient(key)"
                        ><v-icon class="ingredient__del-icon"
                            >mdi-plus-thick</v-icon
                        ></v-btn
                    >
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IngredientsList',
    props: {
        ingredients: {
            type: Object,
            required: true,
        },
    },
    methods: {
        deleteIngredient(key) {
            this.$delete(this.ingredients, key)
            console.log(key.toString())
        },
    },
}
</script>
