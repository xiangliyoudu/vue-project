<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1> 	
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
    	<router-link v-bind:to="'/blog/' + blog.id ">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
    	<article>
    		{{blog.body | snippet}}
    	</article>
    </div>
  </div>
</template>

<script>
//引入axios
import axios from '../axios-auth'

export default {
  name: 'show-blogs',
  data(){
  	return {
  		blogs:[],
  		search:"",
  	}
  },
  created(){
  	var url="/posts";
  	// var localUrl = "../../static/posts.json";
  	//this.$http.get(localUrl).then((data)=>{
    axios.get(url).then((data)=>{
  		this.blogs = data.data.slice(0, 10);
  	});
  },
  computed:{
  	filteredBlogs:function(){
  		return this.blogs.filter((blog)=>{
  			return blog.title.match(this.search);
  		});
  	},
  },

  // 组件过滤器
  filters:{
  	// "to-uppercase":function(value){
  	// 	return value.toUpperCase();
  	// },
    // 驼峰 等价于 -连接
  	toUppercase(value){
  		return value.toUpperCase();
  	},
  },

  // 组件自定义指令
  directives:{
  	"rainbow":{
  		bind(el, binding, vnode){
  			el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  		}
  	},
  }
}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}

.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
  color: #444;
  text-decoration: none;
}

input[type='text']{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

</style>
