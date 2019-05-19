<template>
  <div id="third-page">
    <div class="row" style="height:200px;">
      <p>3.请评价一下寄几：</p>
      <textarea v-model="text" placeholder="请输入..."></textarea>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="submitForm"
       :disabled="disabled">
        提交
      </button>
      <router-link to="/second">
        <button class="btn btn-info">上一步</button>
      </router-link>
      <button @click="resetText" class="btn">重置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'third-page',
  data () {
    return {
      text:'',
    }
  },
  methods:{
    resetText:function(){
      this.text = '';
    },
    validText:function(e){
      if(this.text.trim() == ''){
        e.preventDefault();
      }
    },
    submitForm:function(){
      alert('提交');
    }
  },
  mounted(){
    this.text = '';
  },
  computed:{
    disabled:function(){
      return this.text.trim() == '';
    }
  }
}
</script>

<style scoped>
textarea{
  height: 150px;
  width: 200px;
}
</style>
