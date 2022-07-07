/* Layout */
import Layout from '@/layout'

export const ptype_menus = [
    {       
        path: '/ptype',
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'Ptype',
            component: () => import('@/views/ptype/index'),
            meta: { title: 'PTYPE', icon: 'nested' }
        }
        ]
    }
]

//暴露接口出去
export default ptype_menus