<template>
  <div class="container">
    <div class="row" id="translate-form">
      <div class="col-md-6 col-md-offset-3">
        <form class="well form-inline" v-on:submit.prevent="formSubmit">
          <input class="form-control" type="text" v-model="content" placeholder="输入翻译内容..." required="">
          <select class="form-control" v-model="couponSelected" required="">
           <option v-for="lang in language" :key="lang.name" :value="lang.short">
             {{lang.name}}
           </option> 
          </select>
          <input class="btn btn-primary" type="submit" value="翻译">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'translate-form',
  data () {
    return {
      content:'',
      language:[
        {name:'English', short:'en'},
        {name:'Russian', short:'rn'},
        {name:'Korean', short:'ko'},
      ],
      // 通过v-model获取到选中的值，option中存在value属性，优先获取value值，不存在，获取option的文本内容
      couponSelected:'',
    }
  },
  methods:{
    formSubmit:function(e){
      // e.preventDefault();
      // 向父组件传值, 可以为多个参数
      this.$emit("formSubmit", this.content, this.language);
    }
  },
  created(){
    this.couponSelected = this.language[0].short;
  }
}
</script>
form{
  border:1px #ccc solid;
  border-radius: 10px;
}

<style scoped>

</style>
