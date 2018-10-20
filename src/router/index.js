import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function createRouter() {
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => { return import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'); },
      },
    ],
  });

  router.beforeEach((to, from, next) => {
    // if no route was matched (i.e. a 404), send them to the homepage
    if (to.matched.length === 0) {
      return next({ path: '/', replace: true });
    }

    return next();
  });

  return router;
}
