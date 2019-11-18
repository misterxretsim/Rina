<template>
    <b-form @submit.prevent @reset.prevent>
        <div class="form-composition">
            <h1 v-if="this.$store.getters.answer === 1">Данный продукт является хорошим!</h1>
            <h1 v-else>Данный продукт является плохим!</h1>
            <b-button
                id="again-composition"
                block
                @click="onAgain"
                class="mt-5"
                variant="outline-secondary"
            >Повторить</b-button>
        </div>
    </b-form>
</template>

<script>
    export default {
        name: 'answer',
        methods: {
            onAgain() {
                this.$store.commit('updateAnswer', null)
            }
        }
    }
</script>