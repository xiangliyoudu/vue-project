<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
        <ul class="nav nav-tabs">
          <li><router-link to="/" exact>tag-one</router-link></li>
          <li><router-link to="/tagtwo" exact>tag-two</router-link></li>
          <li><router-link to="/tagthree" exact>tag-three</router-link></li>
        </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TagOne from './components/TagOne'
import TagTwo from './components/TagTwo'
import TagThree from './components/TagThree'

export default {
  name: 'App',
  components:{
   TagOne,TagTwo,TagThree
  }
}
</script>

<style scoped>
#app{
  margin-top: 30px;
}
.router-link-active{
  background: rgba(255,255,255, 0.8);
  color: #444;
}
</style>
