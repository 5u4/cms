import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/LandingPage/Layout.vue';
import OrderPage from '../components/OrderPage/Layout.vue';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/items',
      name: 'OrderPage',
      component: OrderPage
    }
  ]
})
