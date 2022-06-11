import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
*注意：子菜单仅在路由子项时显示。长度>=1
*详情请参见：https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html

*隐藏：true如果设置为true，项目将不会显示在侧栏中（默认值为false）
*alwaysShow：true如果设置为true，将始终显示根菜单
*如果未设置alwaysShow，则当项目具有多个子路由时，
*它将变为嵌套模式，否则不显示根菜单
*重定向：noRedirect如果设置noRedirect，则在面包屑中不会重定向
*名称：'router-name'该名称由<保持活动>使用（必须设置！！！）
*元数据：{
        角色：[“admin”、“editor”]控制页面角色（可以设置多个角色）
        标题：“title”侧边栏和面包屑中显示的名称（推荐设置）
        图标：“svg名称”/“el-icon-x”侧边栏中显示的图标
        面包屑：false如果设置为false，则该项目将隐藏在面包屑中（默认为true）
        活动菜单：“/示例/列表”如果设置路径，侧栏将突出显示您设置的路径
}
*/

export const constantRoutes = [
  
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
  },

  //表格展示页
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      }
    ]
  },

  //表单页面
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '文章编辑', icon: 'form' }
      }
    ]
  },

  //三级菜单页
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'CT程式',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'CT' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'BinSignal' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'ChgCard' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'ComData' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'CT_LABEL' }
      }
    ]
  },
  // 404页必须放在末尾 !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

//暴露接口出去
export default router
