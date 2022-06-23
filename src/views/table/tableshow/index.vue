<template>
  <div style="padding:30px;">
    <div><h1> {{result.name}}</h1></div>
    <el-alert :closable="false" :title=result.region />
    <div class="main" v-html="result.desc"></div>
    <el-alert :closable="false">
      <el-row>
        <el-button  size="small" type="primary" @click="change(result.id,result.region)" v-show="flag">修改</el-button>
        <el-button  size="small" type="danger" v-show="flag">删除</el-button>
      </el-row>
    </el-alert>
  </div>
</template>

 
<script>
export default {
  name:'A',
  data(){
    return {
      result:'',
      id:null,
      flag:false
    }  
  },
  created(){
      this.id=this.$route.params;
      if(!this.id.id){
        this.id=this.$route.query;
      }
      console.log("获取路由参数:",this.$route)
      console.log("获取的文章ID是:",this.id.id);
      if(this.id.id){
        this.flag=true
      }
  },
  mounted(){
    //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
    if(this.id.id){//判断，只有参数中获取到id值，才去数据库中搜索
    this.$axios.get('/api/table/gettableshow',{  //params参数必写 , 如果没有参数传{}也可以
                        params: {  
                                  id: this.id.id//文章id
                                }
                      }).then(res=>{   //这里使用箭头函数的形式
      console.log(res.data,"响应信息")
      this.result=res.data[0]
    })
    }    
  },
  methods: {
    //点击修改按钮触发的事件
    change(id,region) {
      console.log("我获取到的文章id是:"+id);
      this.$confirm('是否对该文章进行修改?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
          console.log("要修改的文章是："+id+region);
          this.$router.push({
            path:'/form/index',
            query: { 
                    id: id, 
                    region: region
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
 


