<!-- 1 模板：html结构 -->
<template>
  <div id="app">
    <ul>
      <li class="meneTitle"><router-link to="/"><h2>首页</h2></router-link></li>
      <!-- <li><router-link to="/hello"><h2>hello</h2></router-link></li> -->
      <li class="meneTitle"><router-link to="/good/add"><h2>新增</h2></router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 2 行为：处理逻辑 -->
<script>
/*局部引入组件 */

export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
   
  },
  created:function(){
    //alert("app.vue created");
  }
}
</script>

<!-- 3 样式 -->
<style scoped>
#app {
  width:90%;
  margin: 10px auto;
}

.meneTitle{
  display: inline-block;
}

ul{
  margin: 10px auto;
  /* background-color: #999; */
  text-align: center;
  list-style-type: none;
}
</style>
