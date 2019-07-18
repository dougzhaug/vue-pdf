import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home';
import Pdf from '@/views/Pdf';
import City from '@/views/city/City';
import Detail from '@/views/detail/Detail';
import Reader from '@/views/reader/Reader';
import Login from '@/views/login/Login';
import Index from '@/views/index/Index';
import Lists from '@/views/index/Lists';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
        path: '/lists',
        name: 'lists',
        component: Lists
    },
    {
        path: '/city',
        name: 'city',
        component: City
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
          path: '/pdf',
          name: 'pdf',
          component: Pdf
      },
      {
          path: '/reader',
          name: 'reader',
          component: Reader
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },

  ],
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
  }
})