<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="捞资料相关语句">
      <router-view />
    </el-alert>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,i) in datas_list" :key="i" :label='item' :name='item'>
        <div
          v-loading="listLoading"
		  v-for="(item,i) in datas" :key="i"
          element-loading-text="Loading">
			<p>{{item.id}}.{{item.name}}</p>
			<pre class="mysqlys" v-html="item.sql"></pre>
			<el-button size="small" type="danger" round @click="change(item.id)" v-model="item.id">修改</el-button>	
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getList } from '@/api/table'
  export default {
    data() {
      return {
        listLoading: true,
        activeName: '捞资料1',       
        datas:null,
        datas_list:[
          '捞资料1',
          '捞资料2'
        ]
      }
    },
    created(){
      this.get_datas(this.activeName)
    },
    methods: {
      handleClick(tab) {
        console.log(tab.name);
        this.get_datas(tab.name);
      },
      get_datas(name){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/laoziliao/getdatas',{ 
              params: {
                name:name
              }
          }).then(res=>{
              console.log(res.data,"捞资料数据")
              this.datas=res.data
          })
          this.listLoading = false
        })
      },
	  //点击修改按钮触发的事件
    change(id) {
        this.$confirm('是否对该文章进行修改?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log("要修改的文章是："+id);
          this.$router.push({
            path:'/laoziliao/menu2',
            query: { 
                    id: id
                  }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });          
        });
    },
    }
  }
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

