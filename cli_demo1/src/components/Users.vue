<template>
  <div class="users">
    <ul>
    	<li v-for="(user,index) in users"
          v-on:click="user.show = !user.show"
          :key="index">
    		<h2>{{user.name}}</h2>
        <h3>{{user.name}}</h3>
        <h3 v-show="user.show">{{user.position}}</h3>
    	</li>
    </ul>
    <button v-on:click="deleteUser">delete</button>
  </div>
</template>

<script>


export default {
  name: 'users',
  props:{
    users:{
      type:Array,
      required:true
    },
  },
  data() {
    return {
      
    }
  },
  methods:{
    deleteUser:function(id){
      this.users.pop();
    }
  },
  components:{

  }
}
</script>

<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 20px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
