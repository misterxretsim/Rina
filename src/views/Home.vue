<template>
    <div class="home">
        <my_composition v-if="this.$store.getters.answer === null"></my_composition>
        <my_answer v-else></my_answer>
        <my_subscribe></my_subscribe>
    </div>
</template>

<script>
    import my_composition from '../components/composition/composition.vue'
    import my_answer      from '../components/answer/answer.vue'
    import my_subscribe   from '../components/subscribe/subscribe.vue'

    export default {
        name: 'home',
        components: {
            my_composition,
            my_answer,
            my_subscribe
        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
        background: #ffeded;
    }
    form {
        width: 100%;
        height: 100%;
        padding: 15%;
    }
</style>