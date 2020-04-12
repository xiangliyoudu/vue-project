<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>{{upperMsg}}</h3>
    <div>
      <button @click="handleClick">button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() { // 必须写函数
      return {
          msg: this.appMsg,
      }
  },
  props:{
      appMsg: {
          String,
          required: true
      },
  },
  methods: {
      handleClick: function(e) {
          console.log(this.msg);
      }
  },
  computed: {
      upperMsg: function(){
          return this.msg.toUpperCase();
      }
  }
};
</script>

<style>
</style>