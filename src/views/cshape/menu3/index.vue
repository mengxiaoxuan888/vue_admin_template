<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="C#相关的程式列表">
      <router-view />
    </el-alert>
    <el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane v-for="(item,i) in cshape_list" :key="i" :label='item' :name='item'>
        <el-table
          v-loading="listLoading"
          :data='cshape'
          element-loading-text="Loading"
          height="1500"
          fit
          border
          stripe
          style="width: 100%">
          <el-table-column
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="主程式"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="子页面"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.subname }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="简介"
            width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.introduce }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                plain
                @click="handleShow(scope.row.id, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                plain
                @click="handleEdit(scope.row.id, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.row.id, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
        activeName: 'AUTHENTIC.HOLD',
        cshape:null,
        cshape_list:[
          'LAB_IOFILE',
          'ROUTE',
          'SFIS.MAINTAINTOOL',
          'SIMDCS',
          'SMO_STAT'
        ]
      }
    },
    created(){
      this.get_cshape(this.activeName)//刚打开该页面时执行
    },
    methods: {
      handleShow(id, row) {//点击了查看按钮
        console.log("你点击了查看按钮")
        console.log(id, row);
        //跳转到文章查看页面
        this.$router.push({
          path:'/articleshow/index',
          query:{
            id:id,
            row:row
          }
        })
      },
      handleEdit(id, row) {//点击了编辑按钮
        console.log(id, row.subname);
        this.$confirm('是否对该文章进行编辑?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log("要修改的文章是："+id+row.subname);
          this.$router.push({
            path:'/formprojects/index',
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
      handleDelete(id, row) {//点击了删除按钮
        console.log(id, row);
      },
      handleClick(tab) {//标签页点击触发
        console.log(tab.name);//标签页名称name
        this.get_cshape(tab.name);//精简代码，自动根据标签名称去数据库查找数据
      },
      //精简代码，通过参数方式获取对应数据
      get_cshape(name){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/cshape/getcshape',{ 
              params: {
                name:name
              }
          }).then(res=>{
              console.log(res.data,"cshape程式数据")
              this.cshape=res.data
          })
          this.listLoading = false
        })
      },
    }
  }
</script>