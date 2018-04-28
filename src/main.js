import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './hello.vue';
import test from './test.vue';

// vue-router

Vue.use(VueRouter);

const routes = [{
    path: '/test',
    component: test
}];

const router = new VueRouter({
    routes
});

// vue

new Vue({
    el: '#app',
    render: h => h(App),
    router
});