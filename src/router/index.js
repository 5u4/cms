import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/LandingPage/Layout.vue';
import OrderPage from '../components/OrderPage/Layout.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/order',
      name: 'OrderPage',
      component: OrderPage
    }
  ]
})
