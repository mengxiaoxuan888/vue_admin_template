<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      stripe
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column label="文章标题">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="类别" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.region }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内容" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pagesizes"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,

      total:null,//条目总数
      currentPage: 1,//一打开选择的页数
      pagesizes:[3, 6, 9, 12],//每页显示的数量
      pagesizeschange:3
    }
  },
  created() {
    this.fetchData(),
    this.getTotal()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        //this.list = response.data.items
        // this.list=[
        //   {id:"1",name:"文章一",region:"类别1",desc:"文章内容1"}
        // ]
        //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
        this.$axios.get('/api/table/getpagelist',{  //params参数必写 , 如果没有参数传{}也可以
                        params: {  
                                  pagenum: this.currentPage-1,//当前页
                                  num: this.pagesizeschange,//从第几条开始查询
                                  nums:this.pagesizeschange//查询多少条
                                }
                      }).then(res=>{  //这里使用箭头函数的形式
                                      console.log(res.data,"分页数据")
                                      this.list=res.data
                              })

        //console.log(response.data.items)
        this.listLoading = false
      })
    },


    //获取对应页数数据
    getPageList(){
      this.$axios.get('/api/table/getpagelist',{  //params参数必写 , 如果没有参数传{}也可以
                        params: {  
                                  pagenum: this.currentPage-1,//当前页
                                  num: this.pagesizeschange,//从第几条开始查询
                                  nums:this.pagesizeschange//查询多少条
                                }
                      }).then(res=>{  //这里使用箭头函数的形式
                                      console.log(res.data,"分页数据")
                                      this.list=res.data
                              })
    },

    //获取数据表中所有数据
    getAllList(){
      this.$axios.get('/api/table/gettable').then(res=>{  //这里使用箭头函数的形式
        console.log(res.data,"响应信息")
        this.list=res.data
        })
    },
    //获取条目总数
    getTotal(){
      this.$axios.get('/api/table/gettotal').then(res=>{  //这里使用箭头函数的形式
      console.log(res.data,"总行数")
      this.total=res.data[0]['count(*)']
      })
    },

    //修改显示条数时触发，一打开页面首次会运行
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesizeschange=val;
        this.currentPage=1;//首次打开页面触发
        this.fetchData()      
    },

    //点击分页数字时触发，一打开页面首次会运行
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage=val;//首次打开页面触发
      this.fetchData()
    }
    
  }
}
</script>
