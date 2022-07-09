/* Layout */
import Layout from '@/layout'

export const wktype_menus = [
    {
        path: '/sp',
        component: Layout,
        redirect: '/sp',
        name: 'Sp',
        meta: { title: 'SP卡关逻辑', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'table',
            name: 'Sptable',
            component: () => import('@/views/sp/tablelist/index'),
            meta: { title: '相关SP列表', icon: 'table' }
          },
          {
            path: 'tableshow',
            name: 'Sptableshow',
            component: () => import('@/views/sp/tableshow/index'),
            meta: { title: '展示SP文章', icon: 'table' }
          },
          {
            path: 'form',
            name: 'Spform',
            component: () => import('@/views/sp/form/index'),
            meta: { title: '编辑SP文章', icon: 'form' }
          }
        ]
    }
]

//暴露接口出去
export default wktype_menus