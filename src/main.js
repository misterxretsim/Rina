import Vue    from 'vue'
import App    from './App.vue'
import store  from './plugins/store/store'
import router from './plugins/router/router'
import             './plugins/bootstrap-vue'

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');