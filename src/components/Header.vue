<template>
    <header class="header">
        <ul class="nav">
            <router-link class="nav__link" tag="li" to="/">Home</router-link>
            <router-link class="nav__link" tag="li" to="/about"
                >About</router-link
            >
        </ul>
    </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>
