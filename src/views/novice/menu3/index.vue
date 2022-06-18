<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 3" />
    <div>
      我是测试页面,用来测试axios请求数据
    </div>
    <div class="main">
    <p>我是A组件:{{result}}</p>
    </div>
  </div>
</template>

 
<script>
export default {
  name:'A',
  data(){
    return {
      result:''
    }
  },
  mounted(){
    //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
    this.$axios.get('/api/novice/getmenu').then(res=>{   //这里使用箭头函数的形式
      console.log(res.data,"响应信息")
      this.result=res.data
    })
  }
}
</script>
 


