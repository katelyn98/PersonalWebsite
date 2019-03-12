import Router from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';

export const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component:  HomePage},
      { path: '/about-page', component: AboutPage},
      
    ]
  });
