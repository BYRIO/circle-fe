import Vue from 'vue';
// Apollo
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import VueApollo from 'vue-apollo';

import App from './index.vue';
import './global.styl';

// vue

new Vue({
    el: '#app',
    render: h => h(App),
});