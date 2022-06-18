<template>
  <div style="padding:30px;">
    <div><h1> {{result.name}}</h1></div>
    <el-alert :closable="false" :title=result.region />
    <div class="main"><p>{{result.desc}}</p> </div>
  </div>
</template>

 
<script>
export default {
  name:'A',
  data(){
    return {
      result:'',
      id:null
    }
  },
  created(){
      this.id=this.$route.params;
      console.log("获取的文章ID是:",this.id.id);
  },
  mounted(){
    //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
    this.$axios.get('/api/table/gettableshow',{  //params参数必写 , 如果没有参数传{}也可以
                        params: {  
                                  id: this.id.id//文章id
                                }
                      }).then(res=>{   //这里使用箭头函数的形式
      console.log(res.data,"响应信息")
      this.result=res.data[0]
    })
  }
}
</script>
 


