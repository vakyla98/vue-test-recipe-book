<template>
    <div>
        <input
            class="ingredient__input ingredient__input_name"
            type="text"
            v-model.lazy="ingredient.name"
        />
        <input
            class="ingredient__input ingredient__input_counter px-2"
            type="number"
            v-model.lazy="ingredient.count"
        />
        <select
            v-model="ingredient.type"
            class="ingredient__input ingredient__input_type mr-5 ml-2"
        >
            <option>g.</option>
            <option>ml.</option>
            <option>cup</option>
            <option>tsp.</option>
            <option>tbsp.</option>
            <option>piece</option>
        </select>
        <v-btn
            :disabled="ingredientsAmount <= 1"
            class="ingredient__del-btn mr-3"
            color="yellow darken-3"
            small
            @click="deleteHandler"
            ><v-icon class="ingredient__del-icon">mdi-plus-thick</v-icon></v-btn
        >
    </div>
</template>
<script>
export default {
    name: 'IngredientsList',
    props: {
        ingredientsAmount: {
            type: Number,
            required: true,
        },
        ingredient: {
            type: Object,
            required: true,
        },
    },
    methods: {
        deleteHandler() {
            this.$emit('delete', this.$vnode.key)
        },
    },
}
</script>
