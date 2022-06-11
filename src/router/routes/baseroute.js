/* Layout */
import Layout from '@/layout'

export const baseroute = [
   //登录页面
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  //错误页面
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  //首页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'SFIS首页', icon: 'dashboard' }
    }]
  }
]

//暴露接口出去
export default baseroute