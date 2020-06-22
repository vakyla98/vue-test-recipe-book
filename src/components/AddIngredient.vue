<template>
    <div class="add-ingredient mt-5">
        <input
            class="input input__name mr-1 mb-2"
            type="text"
            placeholder="Ingredien name"
            v-model="ingredientName"
        />
        <div class="wrap">
            <input
                class="input input__count mr-1 mb-2"
                type="number"
                v-model.number="ingredientCount"
            />
            <select class="input input__select mb-2" v-model="ingredientType">
                <option>g.</option>
                <option>ml.</option>
                <option>cup</option>
                <option>tsp.</option>
                <option>tbsp.</option>
                <option>piece</option>
            </select>
        </div>

        <v-btn
            :disabled="!ingredientName.length"
            class="add-ingredient__btn ml-1 mb-2"
            color="yellow darken-3"
            small
            @click.prevent="addIngredient"
            >Add ingredient</v-btn
        >
    </div>
</template>
<script>
import { v4 } from 'uuid'
export default {
    name: 'AddIngrediend',
    props: {
        ingredients: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            ingredientName: '',
            ingredientCount: 1,
            ingredientType: 'g.',
        }
    },
    methods: {
        addIngredient() {
            this.$set(this.ingredients, v4(), {
                name: this.ingredientName,
                count: this.ingredientCount,
                type: this.ingredientType,
            })
            this.ingredientName = ''
            this.ingredientCount = 1
        },
    },
}
</script>
