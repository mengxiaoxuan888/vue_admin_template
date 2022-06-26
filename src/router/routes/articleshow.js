/* Layout */
import Layout from '@/layout'

export const ct_menus = [

    //表单页面
    {
        path: '/articleshow',
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'Articleshow',
            component: () => import('@/views/articleshow/index'),
            meta: { title: '文章展示', icon: 'nested' }
        }
        ]
    }
]

//暴露接口出去
export default ct_menus