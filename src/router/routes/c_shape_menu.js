/* Layout */
import Layout from '@/layout'

export const c_shape_menus = [
    {
        path: '/cshape',
        component: Layout,
        redirect: '/cshape',
        name: 'Cshape',
        meta: { title: 'C#程式', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'menu1',
            name: 'Menu1',
            component: () => import('@/views/cshape/menu1/index'),
            meta: { title: '生产使用', icon: 'table' }
          },
          {
            path: 'menu2',
            name: 'Menu2',
            component: () => import('@/views/cshape/menu2/index'),
            meta: { title: '成仓使用', icon: 'table' }
          },
          {
            path: 'menu3',
            name: 'Menu3',
            component: () => import('@/views/cshape/menu3/index'),
            meta: { title: 'MIS使用', icon: 'table' }
          }
        ]
    }
]

//暴露接口出去
export default c_shape_menus