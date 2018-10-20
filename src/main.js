// Polyfills for IE support
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';

// Packages
import Vue from 'vue';
import { sync } from 'vuex-router-sync';

// App startup
import './plugins/axios';
import './plugins/vuetify';
import createStore from './store/index';
import createRouter from './router/index';

// Rendering
import App from './App.vue';

// Configuration
Vue.config.productionTip = false;

const store = createStore();
const router = createRouter(store);

// @TODO: Read about more why this is necessary. Maybe not since we aren't using SSR
sync(store, router);

new Vue({
  router,
  store,
  render: (h) => { return h(App); },
}).$mount('#app');
