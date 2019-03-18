import Router from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import ResearchPage from './pages/ResearchPage.vue';

export const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component:  HomePage},
      { path: '/about-page', component: AboutPage},
      { path: './project-page', component: ProjectPage},
      { path: './research-page', component: ResearchPage},
      
    ]
  });