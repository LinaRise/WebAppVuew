import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Faq from '@/components/Faq'
import Join from '@/components/Join'


Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/faq', component: Faq},
    {path: '/join', component: Join}
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;

        }

        if (to.hash) {
            return {selector: to.hash};
        }
        return {x: 0, y: 0}
    }
})

