<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars"></span>
            <span class="logo">
               <router-link :to="{name: 'campus.home'}"><img src="@/assets/images/logo.svg" alt=""></router-link>
            </span>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'headerComponent'
}
</script>
