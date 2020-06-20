<template>
    <div class="add-ingredient mt-5">
        <div class="inputs-wraper">
            <input
                class="input input__name mr-1 mb-2"
                type="text"
                placeholder="Ingredien name"
                v-model="ingredientName"
            />
            <input
                class="input input__count mb-2"
                type="number"
                placeholder="Count"
                v-model.number="ingredientCount"
            />
        </div>

        <v-btn
            :disabled="!ingredientName.length"
            class="add-ingredient__btn ml-1"
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
        ingredients: Object,
    },
    data() {
        return {
            ingredientName: '',
            ingredientCount: 1,
        }
    },
    methods: {
        addIngredient() {
            this.$set(this.ingredients, v4(), {
                name: this.ingredientName,
                count: this.ingredientCount,
            })
            this.ingredientName = ''
            this.ingredientCount = 1
        },
    },
}
</script>
