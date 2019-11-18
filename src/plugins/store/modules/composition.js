export default {
    actions: {
        async sendComposition(ctx/*, composition*/) {
            // const resp = await fetch('/api', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({composition: composition})
            // });
            // const answer = await resp.json();
            // ctx.commit('updateAnswer', answer)
            ctx.commit('updateAnswer', 1)
        }
    },
    mutations: {
        updateAnswer(state, answer) {
            state.answer = answer
        }
    },
    state: {
        answer: null
    },
    getters: {
        answer: (state) => state.answer
    }
}