<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translate-form v-on:formSubmit="receiveContent"></translate-form> 
    <translate-output v-text="translatedContect"></translate-output>
  </div>
</template>

<script>
// 引入子组件
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'App',
  data(){
    return{
      translatedContect:'' //父组件向子组件传值
    }
  },
  components:{
    TranslateForm, TranslateOutput
  },
  methods:{
    receiveContent:function(content, language){
      // console.log('content from child: ' + content);
      // 调用api接口进行翻译
      // var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=_key&lang=" + language + "&text=" + content;
      // this.$http.get(url).then((response)=>{

      // });
      this.translatedContect = content + "翻译后";
    }
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
