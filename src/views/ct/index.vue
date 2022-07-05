<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="CT相关的程式列表">
      <router-view />
    </el-alert>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,i) in datas_list" :key="i" :label='item' :name='item'>
        <el-table
          v-loading="listLoading"
          :data='datas'
          element-loading-text="Loading"
          height="440"
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
            width="400">
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
      <!-- <el-tab-pane label="CT" name="CT">
        <el-table
          :data="ctTableData"
          height="440"
          border
          stripe
          style="width: 100%">
          <el-table-column
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
            width="400">
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
                @click="handleShow(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                plain
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="CT_LABEL" name="CT_LABEL">
        <el-table
          :data="ctLabelTableData"
          height="440"
          border
          stripe
          style="width: 100%">
          <el-table-column
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
            width="400">
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
                @click="handleShow(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                plain
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="CT_PACK" name="CT_PACK">
        <el-table
          :data="ctPackTableData"
          height="440"
          border
          stripe
          style="width: 100%">
          <el-table-column
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
            width="400">
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
                @click="handleShow(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                plain
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="CT_Weight" name="CT_Weight">
        <el-table
          :data="ctWeightTableData"
          height="440"
          border
          style="width: 100%">
          <el-table-column
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
            width="400">
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
                @click="handleShow(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                plain
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="CloneTrooper" name="CloneTrooper">
        <el-table
          :data="cloneTrooperTableData"
          height="440"
          border
          style="width: 100%">
          <el-table-column
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
            width="400">
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
                @click="handleShow(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                plain
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="GBSorting" name="GBSorting">
        <el-table
          :data="gbSortingTableData"
          height="440"
          border
          style="width: 100%">
          <el-table-column
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
            width="400">
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
                @click="handleShow(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                plain
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import { getList } from '@/api/table'
  export default {
    data() {
      return {
        listLoading: true,
        activeName: 'CT',       
        datas:null,
        datas_list:[
          'CT',
          'CT_LABEL',
          'CT_PACK',
          'CT_Weight',
          'CloneTrooper',
          'GBSorting'
        ]
        // ctTableData: [{
        //   id:1,
        //   name:"CT",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:2,
        //   name:"CT",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:3,
        //   name:"CT",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:4,
        //   name:"CT",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:5,
        //   name:"CT",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:6,
        //   name:"CT",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:7,
        //   name:"CT",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }],
        // ctLabelTableData: [{
        //   id:1,
        //   name:"CT_LABEL",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:2,
        //   name:"CT_LABEL",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:3,
        //   name:"CT_LABEL",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:4,
        //   name:"CT_LABEL",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:5,
        //   name:"CT_LABEL",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:6,
        //   name:"CT_LABEL",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:7,
        //   name:"CT_LABEL",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }],
        // ctPackTableData: [{
        //   id:1,
        //   name:"CT_PACK",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:2,
        //   name:"CT_PACK",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:3,
        //   name:"CT_PACK",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:4,
        //   name:"CT_PACK",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:5,
        //   name:"CT_PACK",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:6,
        //   name:"CT_PACK",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }, {
        //   id:7,
        //   name:"CT_PACK",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }],
        // ctWeightTableData: [{
        //   id:1,
        //   name:"CT_Weight",
        //   subname:"BinSignal",
        //   introduce:"该页面简单说明"
        // }],
        // cloneTrooperTableData: [{
        //   id:1,
        //   name:"CloneTrooper",
        //   subname:"CloneTrooper",
        //   introduce:"该页面简单说明"
        // }],
        // gbSortingTableData: [{
        //   id:1,
        //   name:"GBSorting",
        //   subname:"CloneTrooper",
        //   introduce:"该页面简单说明"
        // }]
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
      handleDelete(index, row) {
        console.log(index+1, row);
      },
      get_datas(name){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/ct/getdatas',{ 
              params: {
                name:name
              }
          }).then(res=>{
              console.log(res.data,"CT程式数据")
              this.datas=res.data
          })
          this.listLoading = false
        })
      },
    }
  }
</script>