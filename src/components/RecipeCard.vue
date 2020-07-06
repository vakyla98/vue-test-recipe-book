<template>
    <div class="recipe-card pa-2" @click="$emit('changeActiveRecipe', recipe)">
        <img class="recipe-card__img mb-2" :src="recipe.image" />
        <h4 class="recipe-card__name mb-2">
            {{ recipe.name }}
        </h4>
        <p class='text short-text' v-text='recipe.text'></p>
    </div>
</template>

<script>
export default {
    name: 'RecipeCard',
    props: {
        recipe: {
            type: Object,
            required: true,
        },
    },
}
</script>
