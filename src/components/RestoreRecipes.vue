<template>
    <div class="recipes-backup">
        <p class="recipes-backup__text">
            Looks like somebody delete all recipes :(
            <br />
            But you can restore them.
        </p>
        <v-btn
            @click="restoreHandler"
            class="recipes-backup__btn"
            color="yellow darken-3"
        >
            Yes, i want
        </v-btn>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'RestoreRecipes',
    methods: {
        async restoreHandler() {
            await this.restoreRecipes()
            this.$emit('restore')
        },
        ...mapActions(['restoreRecipes']),
    },
}
</script>
