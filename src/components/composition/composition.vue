<template>
    <b-form @submit.prevent @reset.prevent>
        <div class="form-composition">
            <b-form-group
                id="input-group-composition"
                style="font-weight: 500;"
                label="Введите состав:"
                label-for="input-composition"
                description="Узнайте всю правду о Вашем продукте"
                class="mb-5"
            >
                <b-form-input
                    id="input-composition"
                    type="text"
                    v-model="composition"
                    required
                    placeholder="Water, Propylene Glycol, Alcohol, Glycerin, Myristyl Alcohol"
                ></b-form-input>
            </b-form-group>
            <b-button
                id="send-composition"
                block
                :disabled="isEmpty()"
                @click="onSend"
                variant="outline-secondary"
            >Отправить</b-button>
        </div>
    </b-form>
</template>

<script>
    export default {
        name: 'composition',
        data() {
            return {
                composition: ''
            }
        },
        methods: {
            onSend() {
                this.$store.dispatch('sendComposition'/*, this.composition*/)
            },
            isEmpty() {
                return !this.composition.length
            }
        }
    }
</script>