<template>
	<el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="用户管理" name="first">
<p>1.帮忙查询XXX资料信息</p>
<pre class="mysqlys">
select * from xxx where xxx='xxx'
select * from xxx where xxx='xxx'
</pre>
<p>2.帮忙查询XXX资料信息</p>
<pre class="mysqlys">
select * from xxx where xxx='xxx'
select * from xxx where xxx='xxx'
</pre>
<p>3.帮忙查询XXX资料信息</p>
<pre class="mysqlys">
select * from xxx where xxx='xxx'
select * from xxx where xxx='xxx'
</pre>
<p>4.帮忙查询XXX资料信息</p>
<pre class="mysqlys">
select * from xxx where xxx='xxx'
select * from xxx where xxx='xxx'
</pre>
<p>5.帮忙查询XXX资料信息</p>
<pre class="mysqlys">
select * from xxx where xxx='xxx'
select * from xxx where xxx='xxx'
</pre>
<p>6.帮忙查询XXX资料信息</p>
<pre class="mysqlys">
select * from xxx where xxx='xxx'
select * from xxx where xxx='xxx'
</pre>
		</el-tab-pane>
		<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
	</el-tabs>
</template>
<script>
	export default {
		data() {
			return {
				activeName: 'first'
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
<style scoped>
.mysqlys {
    margin-left: 5px;
    font: 14px/20px Menlo,Monaco,Consolas,"Andale Mono","lucida console","Courier New",monospace;
    border: 2px solid #ddd;
    border-left-width: 4px;
    padding: 5px 5px;
	background-color:aquamarine;
}
</style>
