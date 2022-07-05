/* Layout */
import Layout from '@/layout'

export const tables = [
  //表格展示页
  {
    path: '/table',
    component: Layout,
    redirect: '/table',
    name: 'Example',
    meta: { title: '社区', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/tablelist/index'),
        meta: { title: '社区文章', icon: 'table' }
      },
      {
        path: 'tableshow',
        name: 'Tableshow',
        component: () => import('@/views/table/tableshow/index'),
        meta: { title: '展示文章', icon: 'table' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/table/form/index'),
        meta: { title: '社区编辑文章', icon: 'form' }
      },
      {
        path: 'tinymce',
        component: () => import('@/views/table/tableeditor/tinymce'),
        name: 'TinymceDemo',
        meta: { title: 'Tinymce' }
      }
    ]
  },
  
  //归类文章编辑
  {
    path: '/formprojects',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Formprojects',
        component: () => import('@/views/formprojects/index'),
        meta: { title: '归类文章编辑', icon: 'form' }
      }
    ]
  }
 ]
 
 //暴露接口出去
 export default tables