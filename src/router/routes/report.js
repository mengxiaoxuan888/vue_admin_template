/* Layout */
import Layout from '@/layout'

export const report_menus = [
    {
        path: '/report',
        component: Layout,
        redirect: '/report/menu1',
        name: 'Report',
        meta: {
            title: '报表',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/report/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { title: 'WKD03' }
            },
            {
                path: 'menu2',
                component: () => import('@/views/report/menu2/index'),
                name: 'Menu2',
                meta: { title: 'WKD04' }
            }
        ]
    }
]

//暴露接口出去
export default report_menus