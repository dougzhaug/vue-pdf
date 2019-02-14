import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios

router.beforeEach((to, from, next) => {
    console.log(store.state.token)
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    const exceptRoute = ['login','home'];  //无需验证登录的路由
    let token = store.state.token;  // 是否登录
    if (exceptRoute.indexOf(to.name) < 0) {
        if (!token) {
            router.push({ path: '/login', });
        }
    }
    // 已登录状态；当路由到login时，跳转至home
    // console.log(to.name)
    // localStorage.setItem('routerName', to.name)
    // if (to.name === 'login') {
    //     if (token != null) {
    //         router.push({ path: '/', });
    //     }
    // }
    next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/**
 * 判断登录路由钩子
 */

