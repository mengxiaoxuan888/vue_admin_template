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
        <el-button type="primary" @click="onSubmit" v-show="flag">添加文章</el-button>
        <el-button type="danger" @click="changeSubmit" v-show="!flag">修改文章</el-button>
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
      },
      flag:true//用于判断显示添加按钮还是修改按钮

    }
  },
  created(){
    this.gettable()
  },
  methods: {
    //添加文章
    onSubmit1() {
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
        this.$message({
            type: 'info',
            message: '文章添加成功'
          });
      });
    },

    //修改文章
    onSubmit() {
        this.$confirm('此操作将添加该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
              axios({
	              method:"post",
                url:"/api/form/addarticle",
	              headers: {
		               "Content-Type": "multipart/form-data"
	              },
	              withCredentials:true,
	              data:this.form
	            }).then((res)=>{ 
                console.log(res);
                this.$router.push({
                                  path:'/example/tableshow',//跳转到页面展示页
                                  query: { 
                                          id: res.data.id
                                        }
                });
                console.log(this.form.id)
                console.log("数据添加成功,已经跳转到文章展示页!")
              });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });          
        });
    },

    //修改文章
    changeSubmit() {
        this.$confirm('此操作将修改该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
              axios({
	              method:"post",
                url:"/api/form/updatearticle",
	              headers: {
		                      "Content-Type": "multipart/form-data"
	                        },
	              withCredentials:true,
	              data:this.form
	            }).then((res)=>{ 
                console.log("回传的数据"+res);
                this.$router.push({
                                  path:'/example/tableshow',//跳转到页面展示页
                                  query: { 
                                          id: this.form.id
                                        }
                });
                console.log(this.form.id)
                console.log("数据修改成功,已经跳转到文章展示页!")
              });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });          
        });
    },
    //取消按钮
    onCancel() {
      this.$message({
        message: '你点击了取消按钮！',
        type: 'warning'
      })
    },
    //获取文章内容
    gettable(){ 
      if(this.$route.query.id){//判断只有当有参数时才执行
        this.flag=false
        console.log(this.$route.query)//获取路由地址
        console.log(this.$route.query.id)//获取路由id参数
        console.log(this.$route.query.region)//获取路由region参数
        this.$axios.get('/api/table/gettableshow',{  //params参数必写 , 如果没有参数传{}也可以
                        params: {  
                                  id: this.$route.query.id//文章id
                                }
                      }).then(res=>{   //这里使用箭头函数的形式
                                  console.log(res.data,"响应信息")
                                  this.form=res.data[0]
        })
      }  
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

