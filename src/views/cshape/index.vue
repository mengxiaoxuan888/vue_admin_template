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
      <!-- <el-tab-pane label="AUTHENTIC.HOLD" name="AUTHENTIC.HOLD">
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
      <el-tab-pane label="CBS_SYS" name="CBS_SYS">
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
      <el-tab-pane label="CHK_ITEM" name="CHK_ITEM">
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
      <el-tab-pane label="FAEREGION.XXXX" name="FAEREGION.XXXX">
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
      <el-tab-pane label="MLB.STOCK" name="MLB.STOCK">
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
      <el-tab-pane label="XXXX.PQA_Report" name="XXXX.PQA_Report">
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
      <el-tab-pane label="RIM.STOCK" name="RIM.STOCK">
        <el-table
          :data="cshape"
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
        activeName: 'AUTHENTIC.HOLD',
        cshape:null,
        cshape_list:[
          'AUTHENTIC.HOLD',
          'CBS_SYS',
          'CHK_ITEM',
          'FAEREGION_XXX',
          'FAKESTATION',
          'ISIGHT_XXX',
          'MLB.STOCK',
          'XXX.Label',
          'XXX.PQA_Report',
          'XXX.TRAVELINGCARD',
          'XXX.WEIGHT',
          'MTK_NEW',
          'ODMPRINT',
          'PAM_STOCK',
          'PM_MO',
          'REPORT.XXX',
          'REPORT.QOH',
          'RIM_STOCK',
          'SFIS.BINTRACK',
          'SFIS.CG_STOCK_NEW',
          'SFIS.CODEPRINTER',
          'SFIS.CSD',
          'SFIS.CTRL',
          'SFIS.ESOP',
          'SFIS.LCS',
          'SFIS.XXX',
          'SFIS.OFFLINE_NEW',
          'SFIS.REPAIR',
          'SFIS.RETURN',
          'SFIS.RFID',
          'SFIS.SCRAP_NEW',
          'SFIS.TRY_RUN',
          'SFIS.TransPallet',
          'SFIS.UTK_LAB',
          'SIFS.PANDA',
          'SMT_ITEM',
          'STOCK_SFIS_XXX',
          'WIN_REWORK',
          '下面是成仓程式',
          'C_Into_WareHouse',
          'SFIS.WMS',
          'SFIS.MMD',
          'SFIS.WAREHOUSE',
          'SFIS.PPS',
          'SFIS.LMS-GB',
          'Kanban.Material',
          'PPS',
          'PPS_HOLD',
          '下面是MIS程式',
          'LAB_IOFILE',
          'ROUTE',
          'SFIS.MAINTAINTOOL',
          'SIMDCS',
          'SMO_STAT'
        ]
        // cshape_AUTHENTIC_HOLD: null,
        // cshape_CBS_SYS: null,
        // cshape_CHK_ITEM: null,
        // cshape_FAEREGION_XXX: null,
        // cshape_MLB_STOCK: null,
        // cshape_XXX_PQA_Report: null
      }
    },
    created(){
      this.get_cshape(this.activeName)//刚打开该页面时执行
      //this.get_cshape_AUTHENTIC_HOLD()
      // this.get_cshape_CBS_SYS(),
      // this.get_cshape_CHK_ITEM(),
      // this.get_cshape_FAEREGION_XXX(),
      // this.get_cshape_MLB_STOCK(),
      // this.get_cshape_XXX_PQA_Report()
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
        // if(tab.name == 'AUTHENTIC.HOLD') {
				// 	this.get_cshape_AUTHENTIC_HOLD();
				// }else if(tab.name == 'CBS_SYS') {
				// 	this.get_cshape_CBS_SYS();
				// }else if(tab.name == 'CHK_ITEM') {
				// 	this.get_cshape_CHK_ITEM();
				// }else if(tab.name == 'FAEREGION.XXXX') {
				// 	this.get_cshape_FAEREGION_XXX();
				// }else if(tab.name == 'MLB.STOCK') {
				// 	this.get_cshape_MLB_STOCK();
				// }else if(tab.name == 'XXXX.PQA_Report') {
				// 	this.get_cshape_XXX_PQA_Report();
				// }else if(tab.name == "RIM.STOCK"){
        //   this.get_cshape(tab.name)
        // }
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
      // get_cshape_AUTHENTIC_HOLD(){
      //   this.listLoading = true
      //   getList().then(response => {
      //   //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
      //   this.$axios.get('/api/cshape/getauthentic',{  //params参数必写 , 如果没有参数传{}也可以
      //         params: { }
      //     }).then(res=>{  //这里使用箭头函数的形式
      //         console.log(res.data,"hold程式数据")
      //         this.cshape_AUTHENTIC_HOLD=res.data
      //     })
      //     //console.log(response.data.items)
      //     this.listLoading = false
      //   })
      // },
      // get_cshape_CBS_SYS(){
      //   this.listLoading = true
      //   getList().then(response => {
      //   this.$axios.get('/api/cshape/getcbs',{ 
      //         params: {}
      //     }).then(res=>{  //这里使用箭头函数的形式
      //         console.log(res.data,"cbs程式数据")
      //         this.cshape_CBS_SYS=res.data
      //     })
      //     this.listLoading = false
      //   })
      // },
      // get_cshape_CHK_ITEM(){
      //   this.listLoading = true
      //   getList().then(response => {
      //   this.$axios.get('/api/cshape/getcbs',{ 
      //         params: {}
      //     }).then(res=>{  //这里使用箭头函数的形式
      //         console.log(res.data,"cbs程式数据")
      //         this.cshape_CHK_ITEM=res.data
      //     })
      //     this.listLoading = false
      //   })
      // },
      // get_cshape_FAEREGION_XXX(){
      //   this.listLoading = true
      //   getList().then(response => {
      //   this.$axios.get('/api/cshape/getcbs',{ 
      //         params: {}
      //     }).then(res=>{  //这里使用箭头函数的形式
      //         console.log(res.data,"cbs程式数据")
      //         this.cshape_FAEREGION_XXX=res.data
      //     })
      //     this.listLoading = false
      //   })
      // },
      // get_cshape_MLB_STOCK(){
      //   this.listLoading = true
      //   getList().then(response => {
      //   this.$axios.get('/api/cshape/getcbs',{ 
      //         params: {}
      //     }).then(res=>{  //这里使用箭头函数的形式
      //         console.log(res.data,"cbs程式数据")
      //         this.cshape_MLB_STOCK=res.data
      //     })
      //     this.listLoading = false
      //   })
      // },
      // get_cshape_XXX_PQA_Report(){
      //   this.listLoading = true
      //   getList().then(response => {
      //   this.$axios.get('/api/cshape/getcbs',{ 
      //         params: {}
      //     }).then(res=>{  //这里使用箭头函数的形式
      //         console.log(res.data,"cbs程式数据")
      //         this.cshape_XXX_PQA_Report=res.data
      //     })
      //     this.listLoading = false
      //   })
      // },
    }
  }
</script>