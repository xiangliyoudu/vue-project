<template>
  <footer>
  	<p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props:{
  	copyright:{type:String, required:true}
  },
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
footer{
	background:#222;
	padding: 10px;
}

p{
	color: lightgreen;
	text-align: center;
}

</style>
