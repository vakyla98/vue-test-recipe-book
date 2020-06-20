<template>
    <div class="ingredients">
        <p class="ing" v-for="(data, key) in ingredients" :key="key">
            Name
            <input type="text" v-model.lazy="data.name" />
            Count
            <input type="number" v-model.lazy="data.count" />
            <button @click="deleteIngredient(key)">Del ing</button>
        </p>
    </div>
</template>
<script>
export default {
    name: 'IngredientsList',
    props: {
        ingredients: Object,
    },
    methods: {
        deleteIngredient(key) {
            this.$delete(this.ingredients, key)
        },
    },
}
</script>
