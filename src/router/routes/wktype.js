/* Layout */
import Layout from '@/layout'

export const wktype_menus = [
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'WKTYPE',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { title: 'WKD03' }
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                name: 'Menu2',
                meta: { title: 'WKD04' }
            },
            {
                path: 'menu3',
                component: () => import('@/views/nested/menu3/index'),
                name: 'Menu3',
                meta: { title: 'WKD05' }
            }
        ]
    }
]

//暴露接口出去
export default wktype_menus