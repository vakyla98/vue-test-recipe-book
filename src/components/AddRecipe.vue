<template>
    <form class="form" @submit.prevent="onSubmit">
        <v-text-field
            color="yellow darken-3"
            label="Name"
            required
            v-model="name"
        ></v-text-field>
        <v-text-field
            color="yellow darken-3"
            label="Text"
            required
            v-model="text"
        ></v-text-field>
        <v-text-field
            color="yellow darken-3"
            label="Image URL"
            required
            v-model="image"
        ></v-text-field>
        <ingredients-list :ingredients="ingredients" />
        <p
            class="ingredients-alert"
            v-if="Object.keys(this.ingredients).length === 0"
        >
            Minimum one ingredient must be at list
        </p>
        <add-ingredient :ingredients="ingredients" v-if="ingredients" />
        <div class="form__controls mt-5">
            <v-btn color="grey" @click="$emit('cancel')">Exit</v-btn>
            <v-btn
                class="ml-3"
                color="yellow darken-3"
                :disabled="!isValid"
                type="submit"
            >
                Submit
            </v-btn>
        </div>
    </form>
</template>
<script>
import IngredientsList from './IngredientsList'
import { recipesService } from '../services'
import { mapActions, mapMutations } from 'vuex'
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
        ...mapMutations(['changeLoadingState']),

        async onSubmit() {
            this.changeLoadingState(true)
            await recipesService.addRecipe({
                name: this.name,
                text: this.text,
                ingredients: this.ingredients,
                image: this.image,
            })
            await this.fetchRecipes()
            this.$emit('cancel')
            this.changeLoadingState(false)
        },
        
    },
    computed: {
        isValid() {
            if (
                Object.keys(this.ingredients).length === 0 ||
                this.image === '' ||
                this.text === '' ||
                this.name === ''
            ) {
                return false
            }
            return true
        },
    },
}
</script>
