<template>
    <div class="recipe" @click="$emit('changeActiveHandler', recipe)">
        <img class='img' :src="recipe.image" />
        <p class="">
            {{ recipe.name }}
        </p>
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
<style lang="scss">
.recipe {
    width:150px;
    height:200px;
    border: 2px solid black;
    margin: 5px;
    padding: 5px;
    .img{
        width:100%;
    }
}
</style>
