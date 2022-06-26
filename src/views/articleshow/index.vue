<template>
  <div style="padding:30px;">
    <div><h1> {{result.subname}}</h1></div>
    <el-alert :closable="false" :title=result.name /><br/>
    <div class="main" v-html="result.introduce"></div><br/>
    <el-alert :closable="false">
      <el-row>
        <el-button  size="small" type="primary" @click="change(result.id,result.subname)" v-show="flag">修改</el-button>
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
      console.log("获取路由参数:",this.$route)
      //console.log("id值是:",this.$route.params)
      //var params=this.$route.params;//name与params传递方式
      if(!this.$route.params.id){//如果该方式获取的id为空，就用下面方式获取
        //var query=this.$route.query;//path与query传递方式
        console.log("获取的文章ID是:",this.$route.query.id);
        this.id = this.$route.query.id
        this.result = this.$route.query.row
        if (this.$route.query.row.id)
          this.flag=true
      }else{
        console.log("获取的文章ID是:",this.$route.params.id);
        this.id = this.$route.params.id
        this.result = this.$route.params.row
        if (this.$route.query.params.id)
          this.flag=true
      }
  },
  mounted(){   
    //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
    // if(this.id.id){//判断，只有参数中获取到id值，才去数据库中搜索
    // this.$axios.get('/api/table/gettableshow',{  //params参数必写 , 如果没有参数传{}也可以
    //                     params: {  
    //                               id: this.id.id//文章id
    //                             }
    //                   }).then(res=>{   //这里使用箭头函数的形式
    //   console.log(res.data,"响应信息")
    //   this.result=res.data[0]
    // })
    // }    
  },
  methods: {
    change(id,subname){
      console.log("你点击了修改按钮！")
    }
    //点击修改按钮触发的事件
    // change(id,subname) {
      // console.log("我获取到的文章id是:"+id);
      // this.$confirm('是否对该文章进行修改?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      // }).then(() => {
      //     console.log("要修改的文章是："+id+subname);
      //     this.$router.push({
      //       path:'/form/index',
      //       query: { 
      //               id: id, 
      //               subname: subname
      //             }
      //     })
      //   }).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '取消修改'
      //     });          
      //   });      
    // },
  }
}
</script>
 


