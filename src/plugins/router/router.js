import Vue       from 'vue'
import routes    from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});