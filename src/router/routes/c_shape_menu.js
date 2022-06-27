/* Layout */
import Layout from '@/layout'

export const c_shape_menus = [
    {       
        path: '/cshape',
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'Cshape',
            component: () => import('@/views/cshape/index'),
            meta: { title: 'C#程式', icon: 'nested' }
        }
        ]
    }
]

//暴露接口出去
export default c_shape_menus