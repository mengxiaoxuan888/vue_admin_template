<template>
	<el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
		<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
	</el-tabs>
</template>
<script>
	export default {
		data() {
			return {
				activeName: 'second'
			};
		},
		methods: {
			handleClick(tab) {
        		console.log('我点击了');
				console.log(tab);
        		console.log(tab.name);
        		console.log('我结束了');
				if (tab.name == 'second') {
					// 触发‘配置管理’事件
					this.second();
				} else {
					this.first();
				}
			},
			first() {
				console.log('我是用户管理');
			},
			second() {
				console.log('我是配置管理');
			}
		}
	};
</script>

