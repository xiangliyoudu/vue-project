<template>
  <div id="second-page">
    <div class="row" style="height:200px;">
      <p>2.请选择您兴趣爱好：</p>
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="hobby" value="read">看书
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="hobby" value="swim">游泳
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="hobby" value="run">跑步
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="hobby" value="movie">电影
        </label>
      </div>
    </div>
    <div class="row">
      <router-link to="/third">
        <button class="btn btn-info" @click="validPage" :disabled="disabled">  下一步
        </button>
      </router-link>
      <router-link to="/">
        <button class="btn btn-info">上一步</button>
      </router-link>
      <button @click="resetHobby" class="btn">重置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'second-page',
  data () {
    return {
      hobby:[],
      hobbyDefault:['read', 'run'],
    }
  },
  methods:{
    resetHobby:function(){
      this.hobby = this.hobbyDefault;
    },
    validPage:function(e){
      if(this.hobby.length == 0){
        e.preventDefault();
      }
    }
  },
  computed:{
    disabled:function(){
      return !this.hobby.length > 0;
    }
  },
  mounted(){
    this.hobby = this.hobbyDefault;
  }
}
</script>

<style scoped>

</style>
