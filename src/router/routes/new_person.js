/* Layout */
import Layout from '@/layout'


var _redirect='/novice/menu1';
var _icon='nested';
var _p_list=["/novice","menu1","menu2","menu3","menu4"];
var _n_list=["Novice","Menu1","Menu2","Menu3","Menu4"];
var _title_list=["新手村","SFIS电脑加域","电脑安装驱动","电脑安装打印机","CT安装打印机"]

//@/views/nested/menu1/index
var _v="@/views";
var _x="/";
var _i="/index";
//var _path_jion="@/views"+_path+"/"+_path_list[1]+"index";
var _m0=_v+_p_list[0]+_x+_p_list[0]+_i;
var _m1=_v+_p_list[1]+_x+_p_list[1]+_i;
var _m2=_v+_p_list[2]+_x+_p_list[2]+_i;
var _m3=_v+_p_list[3]+_x+_p_list[3]+_i;
var _m4=_v+_p_list[4]+_x+_p_list[4]+_i;
var _m_list=[_m0,_m1,_m2,_m3,_m4];

export const new_person_menus = [
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
                path: _p_list[1],
                component: () => import(_m_list[1]), // 父节点
                name: _n_list[1],
                meta: { title: _title_list[1] }
            },
            {
                path: _p_list[2],
                //component: () => import(_m_list[2]),
                name: _n_list[2],
                meta: { title: _title_list[2] }
            },
            {
                path: _p_list[3],
                //component: () => import(_m_list[3]),
                name: _n_list[2],
                meta: { title: _title_list[3] }
            }
        ]
    }
]

//暴露接口出去
export default new_person_menus