/* Layout */
import Layout from '@/layout'

export const ct_menus = [

    //表单页面
    {
        path: '/ct',
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'Ct',
            component: () => import('@/views/ct/index'),
            meta: { title: 'CT程式', icon: 'nested' }
        }
        ]
    }
]

//暴露接口出去
export default ct_menus