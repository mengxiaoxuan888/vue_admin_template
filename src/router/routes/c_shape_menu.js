/* Layout */
import Layout from '@/layout'

export const c_shape_menus = [
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'C#程式',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { title: 'hold程式' },
                children: [
                    {
                        path: 'menu1-1',
                        component: () => import('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: { title: 'Menu1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: { title: 'Menu1-2' },
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
                        meta: { title: 'menu1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                name: 'Menu2',
                meta: { title: 'CBS_SYS' }
            },
            {
                path: 'menu3',
                //component: () => import('@/views/nested/menu3/index'),
                name: 'Menu3',
                meta: { title: 'FAERegion' }
            },
            {
                path: 'menu4',
                //component: () => import('@/views/nested/menu4/index'),
                name: 'Menu4',
                meta: { title: 'MTK_NEW' }
            },
            {
                path: 'menu5',
                //component: () => import('@/views/nested/menu5/index'),
                name: 'Menu5',
                meta: { title: 'REWORK' }
            },
            {
                path: 'menu6',
                //component: () => import('@/views/nested/menu6/index'),
                name: 'Menu6',
                meta: { title: 'MLB_STOCK' }
            }
        ]
    }
]

//暴露接口出去
export default c_shape_menus