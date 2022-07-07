/* Layout */
import Layout from '@/layout'
import axios from 'axios'


var _redirect='/novice/menu1';
var _icon='nested';
var _p_list=["/novice","menu1","menu2","menu3","menu4","menu5","menu6","menu7","menu8","menu9","menu10","menu11","menu12","menu13","menu14"];
var _n_list=["Novice","Menu1","Menu2","Menu3","Menu4","Menu5","Menu6","Menu7","Menu8","Menu9","Menu10","Menu11","Menu12","Menu13","Menu14"];
var _title_list=[
    "新手村",
    "1.什么是SFIS",
    "2.SFIS电脑加域",
    "3.电脑SFIS环境安装",
    "4.SFIS电脑程式安装步骤",
    "5.OA电脑程式安装步骤",
    "6.SFIS/OA电脑安装打印机驱动",
    "7.CT安装打印机驱动",
    "8.程式权限开通",
    "9.SFIS网页权限开通",
    "10.CT程式STATION列印",
    "11.BDE的安装",
    "测试页面"
];

var novices;

// 为给定 ID 的 user 创建请求
axios.get('http://localhost:3000/api/novice/getmenu').then(function (response) {
    novices=response.data;
    console.log(novices);
    console.log(novices[0].icon);
  }).catch(function (error) {
    console.log(error);
});
console.log("---------------------------");


//@/views/nested/menu1/index
//var _v="@/views";
//var _x="/";
//var _i="/index";
//var _path_jion="@/views"+_path+"/"+_path_list[1]+"index";
//var _m0=_v+_p_list[0]+_x+_p_list[0]+_i;
//var _m1=_v+_p_list[0]+_x+_p_list[1]+_i;
//var _m2=_v+_p_list[0]+_x+_p_list[2]+_i;
//var _m3=_v+_p_list[0]+_x+_p_list[3]+_i;
//var _m4=_v+_p_list[0]+_x+_p_list[4]+_i;
//var _m_list=[_m0,_m1,_m2,_m3,_m4];

export const novice = [
    {
        path: _p_list[0],
        component: Layout,
        redirect: _redirect,
        name: _n_list[0],
        meta: {
            title: _title_list[0],
            icon: _icon
        },
        children: [
            {
                path: _p_list[1],//@/views/novice/menu1/index
                component: () => import('@/views/novice/menu1/index'), // 父节点
                name: _n_list[1],
                meta: { title: _title_list[1] }
            },
            {
                path: _p_list[2],
                component: () => import('@/views/novice/menu2/index'),
                name: _n_list[2],
                meta: { title: _title_list[2] }
            },
            {
                path: _p_list[3],
                component: () => import('@/views/novice/menu3/index'),
                name: _n_list[3],
                meta: { title: _title_list[3] }
            },
            {
                path: _p_list[4],
                component: () => import('@/views/novice/menu4/index'),
                name: _n_list[4],
                meta: { title: _title_list[4] }
            },
            {
                path: _p_list[5],
                component: () => import('@/views/novice/menu5/index'),
                name: _n_list[5],
                meta: { title: _title_list[5] }
            },
            {
                path: _p_list[6],
                component: () => import('@/views/novice/menu6/index'),
                name: _n_list[6],
                meta: { title: _title_list[6] }
            },
            {
                path: _p_list[7],
                component: () => import('@/views/novice/menu7/index'),
                name: _n_list[7],
                meta: { title: _title_list[7] }
            },
            {
                path: _p_list[8],
                component: () => import('@/views/novice/menu8/index'),
                name: _n_list[8],
                meta: { title: _title_list[8] }
            },
            {
                path: _p_list[9],
                component: () => import('@/views/novice/menu9/index'),
                name: _n_list[9],
                meta: { title: _title_list[9] }
            },
            {
                path: _p_list[10],
                component: () => import('@/views/novice/menu10/index'),
                name: _n_list[10],
                meta: { title: _title_list[10] }
            },
            {
                path: _p_list[11],
                component: () => import('@/views/novice/menu11/index'),
                name: _n_list[11],
                meta: { title: _title_list[11] }
            },
            {
                path: _p_list[12],
                component: () => import('@/views/novice/menu12/index'),
                name: _n_list[12],
                meta: { title: _title_list[12] }
            }
        ]
    }
]

//暴露接口出去
export default novice