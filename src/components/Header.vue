<template>
    <header class="header">
        <ul class="nav">
            <router-link class="nav__link" tag="li" to="/">Recipes</router-link>
            <router-link class="nav__link" tag="li" to="/about"
                >About</router-link
            >
            <a
                class="nav__bug"
                href="mailto:vakyla98@gmail.com?subject=Recipes bug"
            >
                Report bug
            </a>
        </ul>
    </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>
