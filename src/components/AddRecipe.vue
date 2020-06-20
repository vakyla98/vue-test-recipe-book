<template>
    <form @submit.prevent="onSubmit">
        Name
        <input type="text" v-model="name" />
        Text
        <input type="text" v-model="text" />
        Image
        <input type="text" v-model="image" />
        Ingridients
        <ingredients-list :ingredients="ingredients" />
        <add-ingredient :ingredients="ingredients" />
        <button @click="$emit('cancel')">Exit</button>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
import IngredientsList from './IngredientsList'
import { recipesService } from '../services'
import { mapActions } from 'vuex'
import AddIngredient from './AddIngredient'
export default {
    name: 'AddRecipe',
    components: {
        AddIngredient,
        IngredientsList,
    },
    data() {
        return { name: '', text: '', image: '', ingredients: {} }
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        async onSubmit() {
            await recipesService.addRecipe({
                name: this.name,
                text: this.text,
                ingredients: this.ingredients,
                image: this.image,
            })
            await this.fetchRecipes()
            this.$emit('cancel')
        },
    },
}
</script>
<style lang="scss"></style>
