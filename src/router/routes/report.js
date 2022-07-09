/* Layout */
import Layout from '@/layout'

export const report_menus = [
    {
        path: '/report',
        component: Layout,
        redirect: '/report',
        name: 'Report',
        meta: { title: 'REPORT', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'table',
            name: 'Reporttable',
            component: () => import('@/views/report/tablelist/index'),
            meta: { title: '相关report列表', icon: 'table' }
          },
          {
            path: 'tableshow',
            name: 'Reporttableshow',
            component: () => import('@/views/report/tableshow/index'),
            meta: { title: '展示report文章', icon: 'table' }
          },
          {
            path: 'form',
            name: 'Reportform',
            component: () => import('@/views/report/form/index'),
            meta: { title: '编辑report文章', icon: 'form' }
          }
        ]
    }
]

//暴露接口出去
export default report_menus