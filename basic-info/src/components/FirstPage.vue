<template>
  <div id="first-page">
    <div class="row" style="height:200px;">
      <p>1.请问你的性别是：</p>
      <div class="radio">
        <label>
          <input type="radio" v-model="gender" value="man">男
        </label>
        <label>
          <input type="radio" v-model="gender" value="woman">女
        </label>
        <label>
          <input type="radio" v-model="gender" value="mimi">保密
        </label>
      </div>
    </div>
    <div class="row">
      <router-link to="/second">
        <button class="btn btn-info">下一步</button>
      </router-link>
      <button @click="resetGender" class="btn">重置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'first-page',
  data () {
    return {
      gender:'',
      genderDefault:'mimi',
    }
  },
  methods:{
    resetGender:function(){
      this.gender = this.genderDefault;
    }
  },
  mounted(){
    this.gender = this.genderDefault;
  }
}
</script>

<style scoped>

</style>
