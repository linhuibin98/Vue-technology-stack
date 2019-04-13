import Home from '@/components/Home'

//路由守卫 : beforeEnter

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/list/:name',
    name: 'List',
    component: () => import('@/components/List'),
    props: route => ({
      food: route.query.food
    })
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/components/parent'),
    children: [{
      path: 'child/:id',
      component: () => import('@/components/child')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login')
  },
  {
    path: '*',
    component: () => import('@/components/ERROR_404')
  }
]