import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import My from "../components/my/my";
import Find from "../components/find/find.vue";
import Shop from "../components/shop/shop.vue";
import ErrorCom from "../components/error"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path:"**",
      component:ErrorCom
    }
  ]
})
