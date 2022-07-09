/* Layout */
import Layout from '@/layout'

export const webpage_menus = [
    {
        path: '/webpega',
        component: Layout,
        redirect: '/webpega/menu1',
        name: 'Webpega',
        meta: {
            title: '网页',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/webpega/menu1/index'),
                name: 'Menu1',
                meta: { title: 'SFIS网页' }
            },
            {
                path: 'menu2',
                component: () => import('@/views/webpega/menu2/index'),
                name: 'Menu2',
                meta: { title: '其他网页' }
            }
        ]
    }
]

//暴露接口出去
export default webpage_menus