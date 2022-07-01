<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="C#相关的程式列表">
      <router-view />
    </el-alert>
    <el-tabs tab-position="left">
      <el-tab-pane label="AUTHENTIC.HOLD">
        <el-table
          v-loading="listLoading"
          :data="cshape_AUTHENTIC_HOLD"
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
      <el-tab-pane label="CBS_SYS">
        <el-table
          :data="cshape_CBS_SYS"
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
      <el-tab-pane label="CHK_ITEM">
        <el-table
          :data="cshape_CHK_ITEM"
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
      <el-tab-pane label="FAEREGION.XXXX">
        <el-table
          :data="cshape_FAEREGION_XXX"
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
      <el-tab-pane label="MLB.STOCK">
        <el-table
          :data="cshape_MLB_STOCK"
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
      <el-tab-pane label="XXXX.PQA_Report">
        <el-table
          :data="cshape_XXX_PQA_Report"
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
        cshape_AUTHENTIC_HOLD: null,
        cshape_CBS_SYS: null,
        cshape_CHK_ITEM: null,
        cshape_FAEREGION_XXX: null,
        cshape_MLB_STOCK: null,
        cshape_XXX_PQA_Report: null
      }
    },
    created(){
      this.get_cshape_AUTHENTIC_HOLD(),
      this.get_cshape_CBS_SYS(),
      this.get_cshape_CHK_ITEM(),
      this.get_cshape_FAEREGION_XXX(),
      this.get_cshape_MLB_STOCK(),
      this.get_cshape_XXX_PQA_Report()
    },
    methods: {
      handleShow(index, row) {
        console.log("你点击了查看按钮")
        console.log(index+1, row);
        //跳转到文章查看页面
        this.$router.push({
          path:'/articleshow/index',
          query:{
            id:index+1,
            row:row
          }
        })
      },
      handleEdit(index, row) {
        console.log(index+1, row);
      },
      handleDelete(index, row) {
        console.log(index+1, row);
      },
      get_cshape_AUTHENTIC_HOLD(){
        this.listLoading = true
        getList().then(response => {
        //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
        this.$axios.get('/api/cshape/getauthentic',{  //params参数必写 , 如果没有参数传{}也可以
              params: { }
          }).then(res=>{  //这里使用箭头函数的形式
              console.log(res.data,"hold程式数据")
              this.cshape_AUTHENTIC_HOLD=res.data
          })
          //console.log(response.data.items)
          this.listLoading = false
        })
      },
      get_cshape_CBS_SYS(){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/cshape/getcbs',{ 
              params: {}
          }).then(res=>{  //这里使用箭头函数的形式
              console.log(res.data,"cbs程式数据")
              this.cshape_CBS_SYS=res.data
          })
          this.listLoading = false
        })
      },
      get_cshape_CHK_ITEM(){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/cshape/getcbs',{ 
              params: {}
          }).then(res=>{  //这里使用箭头函数的形式
              console.log(res.data,"cbs程式数据")
              this.cshape_CHK_ITEM=res.data
          })
          this.listLoading = false
        })
      },
      get_cshape_FAEREGION_XXX(){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/cshape/getcbs',{ 
              params: {}
          }).then(res=>{  //这里使用箭头函数的形式
              console.log(res.data,"cbs程式数据")
              this.cshape_FAEREGION_XXX=res.data
          })
          this.listLoading = false
        })
      },
      get_cshape_MLB_STOCK(){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/cshape/getcbs',{ 
              params: {}
          }).then(res=>{  //这里使用箭头函数的形式
              console.log(res.data,"cbs程式数据")
              this.cshape_MLB_STOCK=res.data
          })
          this.listLoading = false
        })
      },
      get_cshape_XXX_PQA_Report(){
        this.listLoading = true
        getList().then(response => {
        this.$axios.get('/api/cshape/getcbs',{ 
              params: {}
          }).then(res=>{  //这里使用箭头函数的形式
              console.log(res.data,"cbs程式数据")
              this.cshape_XXX_PQA_Report=res.data
          })
          this.listLoading = false
        })
      },
    }
  }
</script>