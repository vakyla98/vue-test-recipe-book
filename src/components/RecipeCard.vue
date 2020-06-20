<template>
    <div class="recipe-card" @click="$emit('changeActiveHandler', recipe)">
        <img class="img" :src="recipe.image" />
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
.recipe-card {
    display: flex;
    font-size: 14px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    .img {
        width: 100%;
    }
}
</style>
