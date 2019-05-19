<template>
  <div id="app">
    <vuex1/>
  </div>
</template>

<script>
import Vuex1 from './components/Vuex1'

export default {
  name: 'App',
  components: {
    Vuex1
  },
  mounted(){ // APP组件挂载后初始化vuex的store中的数据
    // module a data initialize
    this.$store.state.modA.msg = "app组件挂载后初始化msg";
    this.$store.state.modA.nums = [1,2,3,4,5,6,7,8,9];
    // module b data initialize
    this.$store.state.modB.count = 666;
    console.log('data initialised...')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
