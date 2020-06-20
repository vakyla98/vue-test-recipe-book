<template>
    <v-app id="app">
        <Header />
        <router-view class="container" />
    </v-app>
</template>
<script>
import Header from './components/Header'
export default {
    components: {
        Header,
    },
}
</script>
<style lang="scss"></style>
