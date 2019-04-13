import Home from '@/components/Home'
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
    path: '/list/:name',
    name: 'List',
    component: () => import('@/components/List')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/components/parent'),
    children: [{
      path: 'child',
      component: () => import('@/components/child')
    }]
  }
]