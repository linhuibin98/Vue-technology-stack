import Vue from 'vue'
import Router from 'vue-router'
import  routes from './routes'
import { setTitle } from '../lib/util';

Vue.use(Router)

const router =  new Router({
  routes,
})

const HAS_LOGINED = true;


router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title);
  if (to.name !== 'Login') {
    if (HAS_LOGINED) next();
    else next({name: 'Login'});
  } else {
    if (HAS_LOGINED) next({name: 'Home'});
    else next();
  }
})

//全局守卫  beforeEach, beforeResolve, afterEach

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的组件）里调用组件内离开守卫：beforeRouteLeave
 * 3. 调用全局的前置守卫：beforeEach
 * 4. 在重用的组件里调用：beforeRouterUpdate
 * 5. 调用路由独享守卫： beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用beforeRouterEnter
 * 8. 调用全局的解析守卫： beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫： afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用：beforeRouteEnter守卫里传给next的回调函数
 * 
 */


export default router;
