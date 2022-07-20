/* Layout */
import Layout from '@/layout'

export const laoziliao_menus = [
    {
        path: '/laoziliao',
        component: Layout,
        redirect: '/laoziliao/menu1',
        name: 'Laoziliao',
        meta: {
            title: '捞资料',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/laoziliao/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { title: '捞资料大全' }
            },
            {
                path: 'menu2',
                component: () => import('@/views/laoziliao/menu2/index'),
                name: 'Menu2',
                meta: { title: '编辑捞资料' }
            }
        ]
    }
]

//暴露接口出去
export default laoziliao_menus