<template>
    <div class="loading-layout">
        <div class="loading-layout__card">
            <p class="loading-layout__text mb-5">
                <slot></slot>
            </p>
            <v-progress-circular
                class="loading-layout__spiner"
                :size="70"
                :width="7"
                color="yellow darken-3"
                indeterminate
            ></v-progress-circular>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoadingLayout',
}
</script>
