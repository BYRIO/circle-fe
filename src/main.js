import Vue from 'vue';
import VueRouter from 'vue-router';
// Apollo
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import VueApollo from 'vue-apollo';

import Base from './base.vue';
import Landing from './landing.vue';
import Single from './single.vue';
import './global.styl';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Landing },
    { path: '/:id', component: Single }
];

const router = new VueRouter({
    routes
});

// vue

new Vue({
    el: '#app',
    render: h => h(Base),
    router
});