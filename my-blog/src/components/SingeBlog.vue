<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.body}}</article>
    <button @click="deleteBlog">删除</button>
    <router-link v-bind:to="'/edit/' + id">编辑</router-link>
  </div>
</template>

<script>
//引入axios
import axios from 'axios'

export default {
  name: 'single-blog',
  data () {
    return {
      //获取路由参数
      id:this.$route.params.id,
      blog:{},
    }
  },
  created(){
    // var localUrl = "../../static/posts/" + this.id +".json";
    var url = "/posts/" + this.id;
    // 使用axios get数据
    axios.get(url).then((data)=>{
      this.blog = data.data;
    });
  },
  methods:{
    deleteBlog:function(){
      var url = "/posts/1"; //伪url
      this.$http.delete(url).then(response => {
        this.$router.push({path:'/'}); // 页面跳转到 /
      });
    }
  }
}
</script>

<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  boder:1px dotted #aaa;
}
</style>
