import Vue         from 'vue'
import Vuex        from 'vuex'
import composition from './modules/composition'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        composition
    }
});