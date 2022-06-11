/* Layout */
import Layout from '@/layout'

export const ct_menus = [
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
            },
            {
                path: 'menu3',
                //component: () => import('@/views/nested/menu3/index'),
                name: 'Menu3',
                meta: { title: 'CT_PACK' }
            },
            {
                path: 'menu4',
                //component: () => import('@/views/nested/menu4/index'),
                name: 'Menu4',
                meta: { title: 'CT_Weight' }
            },
            {
                path: 'menu5',
                //component: () => import('@/views/nested/menu5/index'),
                name: 'Menu5',
                meta: { title: 'CloneTrooper' }
            },
            {
                path: 'menu6',
                //component: () => import('@/views/nested/menu6/index'),
                name: 'Menu6',
                meta: { title: 'GBSorting' }
            }
        ]
    }
]

//暴露接口出去
export default ct_menus