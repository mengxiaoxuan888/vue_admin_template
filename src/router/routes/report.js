/* Layout */
import Layout from '@/layout'

export const report_menus = [
    {       
        path: '/report',
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'Report',
            component: () => import('@/views/report/index'),
            meta: { title: 'Report报表', icon: 'nested' }
        }
        ]
    }
]

//暴露接口出去
export default report_menus