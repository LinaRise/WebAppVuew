import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Faq from '@/components/Faq'


Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/faq', component: Faq}
];

export default new VueRouter({
    mode: 'history',
    routes
})

