import Router from 'vue-router';

// import SignupView from './pages/SignUpView.vue';
// import LoginView from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
// import ProfilePage from './pages/ProfilePage.vue';
// import EventView from './pages/EventView.vue';

export const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component:  HomePage},
      { path: '/about-page', component: AboutPage},
      // { path: '/login', component: LoginView},
      // { path: '/signup', component: SignupView},
      // { path: '/profile', component: ProfilePage},
      // { path: '/event-view', component: EventView}
    ]
  });