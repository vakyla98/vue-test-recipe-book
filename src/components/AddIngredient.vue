<template>
    <div>
        Name
        <input type="text" v-model="ingredientName" />
        Count
        <input type="number" v-model.number="ingredientCount" />
        <button @click.prevent="addIngredient">Add ing</button>
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
            this.ingredientCount = 0
        },
    },
}
</script>
