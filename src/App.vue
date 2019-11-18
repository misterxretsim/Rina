<template>
    <div id="app">
        <my_home></my_home>
    </div>
</template>

<script>
    import my_home from './views/Home.vue'

    export default {
        name: 'app',
        components: {
            my_home
        }
    }
</script>

<style>
    html, body, #app {
        width: 100%;
        height: 100%;
    }
</style>