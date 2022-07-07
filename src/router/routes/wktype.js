/* Layout */
import Layout from '@/layout'

export const wktype_menus = [
    {       
        path: '/wktype',
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'Wktype',
            component: () => import('@/views/wktype/index'),
            meta: { title: 'WKTYPE', icon: 'nested' }
        }
        ]
    }
]

//暴露接口出去
export default wktype_menus