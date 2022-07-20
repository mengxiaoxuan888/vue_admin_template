<template>
  <div style="padding:30px;">  
	<div class="line"></div>
	<el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b">
		<el-submenu index="1">
			<template slot="title">Setting</template>
			<el-submenu index="1-1">
				<template slot="title">Permission</template>
				<el-menu-item index="1-1-1">Admin_Permission</el-menu-item>
				<el-menu-item index="1-1-2">Admin_UserInfo</el-menu-item>
				<el-menu-item index="1-1-3">Manage_Permission</el-menu-item>
				<el-menu-item index="1-1-4">Manage_UserInfo</el-menu-item>
				<el-menu-item index="1-1-5">Manage_BatchAction</el-menu-item>
				<el-menu-item index="1-1-6">Manage_Permission_Manage</el-menu-item>
			</el-submenu>
			<el-submenu index="1-2">
				<template slot="title">Exception</template>
				<el-menu-item index="1-2-1">Exception_Update</el-menu-item>
				<el-menu-item index="1-2-2">Exception_Delete</el-menu-item>
				<el-menu-item index="1-2-3">Exception_DelUpd</el-menu-item>
			</el-submenu>
			<el-submenu index="1-3">
				<template slot="title">CloneTrooper</template>
				<el-menu-item index="1-3-1">Kamino_Setting</el-menu-item>
			</el-submenu>
			<el-submenu index="1-4">
				<template slot="title">选项4</template>
				<el-menu-item index="1-4-1">选项1</el-menu-item>
				<el-menu-item index="1-4-2">选项2</el-menu-item>
				<el-menu-item index="1-4-3">选项3</el-menu-item>
			</el-submenu>
		</el-submenu>
		<el-submenu index="2">
			<template slot="title">SFIS_Maintain</template>
			<el-submenu index="2-1">
				<template slot="title">Data_Maintain</template>
				<el-menu-item index="2-1-1">Admin_Permission</el-menu-item>
				<el-menu-item index="2-1-2">Admin_UserInfo</el-menu-item>
				<el-menu-item index="2-1-3">Manage_Permission</el-menu-item>
				<el-menu-item index="2-1-4">Manage_UserInfo</el-menu-item>
				<el-menu-item index="2-1-5">Manage_BatchAction</el-menu-item>
				<el-menu-item index="2-1-6">Manage_Permission_Manage</el-menu-item>
			</el-submenu>
			<el-submenu index="2-2">
				<template slot="title">CSC_Maintain</template>
				<el-menu-item index="2-2-1">Exception_Update</el-menu-item>
				<el-menu-item index="2-2-2">Exception_Delete</el-menu-item>
				<el-menu-item index="2-2-3">Exception_DelUpd</el-menu-item>
			</el-submenu>
			<el-submenu index="2-3">
				<template slot="title">Basic_Maintain</template>
				<el-menu-item index="2-3-1">Kamino_Setting</el-menu-item>
			</el-submenu>
			<el-submenu index="2-4">
				<template slot="title">User_Maintain</template>
				<el-menu-item index="2-4-1">Kamino_Setting</el-menu-item>
			</el-submenu>
			<el-submenu index="2-5">
				<template slot="title">CloneTrooper_Maintain</template>
				<el-menu-item index="2-5-1">选项1</el-menu-item>
				<el-menu-item index="2-5-2">选项2</el-menu-item>
				<el-menu-item index="2-5-3">选项3</el-menu-item>
			</el-submenu>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">Query</template>
			<el-submenu index="3-1">
				<template slot="title">MO_Query</template>
				<el-menu-item index="3-1-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-2">
				<template slot="title">Basic_Query</template>
				<el-menu-item index="3-2-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-3">
				<template slot="title">ISN_Query</template>
				<el-menu-item index="3-3-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-4">
				<template slot="title">SO_Query</template>
				<el-menu-item index="3-4-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-5">
				<template slot="title">SFIS_Query</template>
				<el-menu-item index="3-5-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-6">
				<template slot="title">SFIS_Query2</template>
				<el-menu-item index="3-6-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-7">
				<template slot="title">SFIS_QA_Query</template>
				<el-menu-item index="3-7-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-8">
				<template slot="title">SFIS_WH_Query</template>
				<el-menu-item index="3-8-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-9">
				<template slot="title">SFIS_Log_Query</template>
				<el-menu-item index="3-9-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-10">
				<template slot="title">SFIS_MLB_Query2</template>
				<el-menu-item index="3-10-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-11">
				<template slot="title">WMS_Query</template>
				<el-menu-item index="3-11-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="3-12">
				<template slot="title">ISN_Query2</template>
				<el-menu-item index="3-12-1">选项1</el-menu-item>
			</el-submenu>
		</el-submenu>
		<el-submenu index="4">
			<template slot="title">Report</template>
			<el-submenu index="4-1">
				<template slot="title">MO_Report</template>
				<el-menu-item index="4-1-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="4-2">
				<template slot="title">CG_Report</template>
				<el-menu-item index="4-2-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="4-3">
				<template slot="title">Yield_Report</template>
				<el-menu-item index="4-3-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="4-4">
				<template slot="title">Error_Report</template>
				<el-menu-item index="4-4-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="4-5">
				<template slot="title">SAPGR_Report</template>
				<el-menu-item index="4-5-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="4-6">
				<template slot="title">ISN_Report</template>
				<el-menu-item index="4-6-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="4-7">
				<template slot="title">HSMD_CONTRON</template>
				<el-menu-item index="4-7-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="4-8">
				<template slot="title">PQA_Take_Apart_Report</template>
				<el-menu-item index="4-8-1">选项1</el-menu-item>
			</el-submenu>		
		</el-submenu>
		<el-submenu index="5">
			<template slot="title">Sub_Syatem</template>
			<el-submenu index="5-1">
				<template slot="title">iWarningApp</template>
				<el-menu-item index="5-1-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="5-2">
				<template slot="title">N_BomStat</template>
				<el-menu-item index="5-2-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="5-3">
				<template slot="title">PDA</template>
				<el-menu-item index="5-3-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="5-4">
				<template slot="title">PDCA</template>
				<el-menu-item index="5-4-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="5-5">
				<template slot="title">UTK</template>
				<el-menu-item index="5-5-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="5-6">
				<template slot="title">OP个人效率系统</template>
				<el-menu-item index="5-6-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="5-7">
				<template slot="title">OP个人良率系统</template>
				<el-menu-item index="5-7-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="5-8">
				<template slot="title">RMA_Web</template>
				<el-menu-item index="5-8-1">选项1</el-menu-item>
			</el-submenu>		
		</el-submenu>
		<el-submenu index="6">
			<template slot="title">Extenal_Link</template>
			<el-submenu index="6-1">
				<template slot="title">Bobcat</template>
				<el-menu-item index="6-1-1">选项1</el-menu-item>
			</el-submenu>
			<el-submenu index="6-2">
				<template slot="title">Call Help</template>
				<el-menu-item index="6-2-1">选项1</el-menu-item>
			</el-submenu>	
		</el-submenu>
		<el-menu-item index="7"><a href="https://www.ele.me" target="_blank">Others</a></el-menu-item>
	</el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
