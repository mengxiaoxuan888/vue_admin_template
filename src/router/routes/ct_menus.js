/* Layout */
import Layout from '@/layout'

export const ct_menus = [
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested',
        name: 'Nested',
        meta: {
            title: 'CT程式',
            icon: 'nested'
        }
    }
]

//暴露接口出去
export default ct_menus