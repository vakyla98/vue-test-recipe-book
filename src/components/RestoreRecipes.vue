<template>
    <div class="recipes-backup">
        <p>
            Looks like somebody delete all recipes :( But you can restore them.
        </p>
        <v-btn @click="restoreHandler">Yes, i want</v-btn>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'RestoreRecipes',
    methods: {
        async restoreHandler() {
            await this.restoreRecipes()
            this.$emit('restore', 'from restore')
        },
        ...mapActions(['restoreRecipes']),
    },
}
</script>
