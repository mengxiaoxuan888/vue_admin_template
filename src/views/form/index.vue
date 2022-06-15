<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" action="">
      <el-form-item label="文章标题">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="文章所属">
        <el-select v-model="form.region" placeholder="请选择所属分类">
          <el-option label="小知识" value="xiaozhishi" />
          <el-option label="CT程式" value="CT" />
          <el-option label="C#程式" value="C#" />
          <el-option label="WKTYPE" value="WKTYPE" />
          <el-option label="P-TYPE" value="PTYPE" />
          <el-option label="报表" value="REPORT" />
          <el-option label="网页" value="WEB" />
          <el-option label="社区" value="community" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章编辑">
        <el-input v-model="form.desc" type="textarea" :autosize="{ minRows: 15, maxRows: 30}"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交文章</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>




<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // let formData = new FormData();
      // for(var key in this.form){
      //   formData.append(key,this.form[key]);
      // }
 
      axios({
	      method:"post",
	      //url:"/api/form/post",
        url:"/api/form/addarticle",
	      headers: {
		      "Content-Type": "multipart/form-data"
	      },
	      withCredentials:true,
	      data:this.form
	    }).then((res)=>{
        console.log(res);
      });
    },
    onCancel() {
      this.$message({
        message: '你点击了取消按钮！',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

