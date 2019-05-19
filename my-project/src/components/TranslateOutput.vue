<template>
  <div class="translate-output">
  	<h1>翻译结果</h1>
    <p>{{translatedContect}}</p>
  </div>
</template>

<script>
export default {
  name: 'translate-output',
  // 接收父组件的值
  props:{
  	translatedContect:{
  		type:String
  	}
  }
}
</script>

<style scoped>

</style>
