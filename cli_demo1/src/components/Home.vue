<!-- 1 模板：html结构 -->
<template>
  <div id="home">
    <!-- 父组件向子组件传值:title, users, copyright -->
    <app-header v-on:titleChanged="updateTitle($event)"
                v-bind:title="title">
    </app-header>
    <Good ></Good>
    <!-- <users v-bind:users="users"></users> -->
    <!-- <users v-bind:users="users"></users> -->
    <!-- <app-footer v-bind:copyright="title"></app-footer> -->
  </div>
</template>

<!-- 2 行为：处理逻辑 -->
<script>
/*局部引入组件 */
import Users from "./Users"
import Header from "./Header"
import Footer from "./Footer"
import Good from './Good'

export default {
  name: 'home',
  data(){
    return {
      title:"欣儿的小店",
      copyright:"copyright@209",
      users:[
        /*{name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false},
        {name:"aaa", position:"web developer", show:false}*/
      ]
    }
  },
  methods:{
    updateTitle:function(title){
      this.title = title;
    }
  },
  /*注册组件*/
  components: {
    "users":Users,   //也可写为：Users
    "app-header":Header,
    "app-footer":Footer,
    Good
  },
  created:function(){
    // rest资源
    var url = "/api/user/listAll";
    // var url = "http://jsonplaceholder.typicode.com/users";
    // 通过http获取资源
    this.$http.get(url).then((data)=>{   // (data)=>:箭头函数
      data = data.body;
      // console.log(data);
      var usersArray = [];

      for(let key in data){
        usersArray.push(data[key]); //遍历data.body对象中的数据，push到临时数组中
      }
      this.users = usersArray;
    });
  }
}
</script>

<!-- 3 样式 -->
<style>

</style>
