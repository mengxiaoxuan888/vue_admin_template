import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入其他route--菜单route
import baseroute from './routes/baseroute'//基础路由
import tables from './routes/tables'//社区文章列表
import ct_menus from './routes/ct_menus'//CT程式
import articleshow from './routes/articleshow'//文章展示
//import c_shape_menus from './routes/c_shape_menu'//C#程式
//import wktype_menus from './routes/wktype'//WKTYPE
//import ptype_menus from './routes/ptype'//ptype
//import report_menus from './routes/report'//报表
//import webpage_menus from './routes/webpega'//网页
//import new_person_menus from './routes/new_person'
//import novice from './routes/novice'//新手村

/**
*注意：子菜单仅在路由子项时显示。长度>=1
*详情请参见：https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html

*隐藏：true如果设置为true，项目将不会显示在侧栏中（默认值为false）
*alwaysShow：true如果设置为true，将始终显示根菜单
*如果未设置alwaysShow，则当项目具有多个子路由时，
*它将变为嵌套模式，否则不显示根菜单
*重定向：noRedirect如果设置noRedirect，则在面包屑中不会重定向
*名称：'router-name'该名称由<保持活动>使用（必须设置！！！）
*元数据：{
        角色：[“admin”、“editor”]控制页面角色（可以设置多个角色）
        标题：“title”侧边栏和面包屑中显示的名称（推荐设置）
        图标：“svg名称”/“el-icon-x”侧边栏中显示的图标
        面包屑：false如果设置为false，则该项目将隐藏在面包屑中（默认为true）
        活动菜单：“/示例/列表”如果设置路径，侧栏将突出显示您设置的路径
}
*/

export const constantRoutes = [
  ...baseroute,//基础路由
  ...tables,//社区文章列表
  //...new_person_menus,
  ...articleshow,//文章展示
  ...ct_menus,//CT程式
  //...c_shape_menus,//C#程式
  //...wktype_menus,//WKTYPE
  //...ptype_menus,//ptype
  //...report_menus,//报表
  //...webpage_menus,//网页
  //...novice,//新手村
  // 404页必须放在末尾 !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

//暴露接口出去
export default router
