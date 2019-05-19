<template>
  <div id="vuex1">
    <h1>module A</h1>
    <h1>{{ msg }}</h1>
    <button v-on:click="updateMsg">+</button>
    <button v-on:click="reduceMsg">-10</button>
    <div>
      <ul>
        <li v-for="num in nums">
          {{num}}
        </li>
      </ul>
      <p>count: {{numsCount}}</p>
    </div>
    <div>
      <button @click="anUpdateMs">异步修改数据</button>
    </div>
    <hr>
    <h1>modele B</h1>
    <h2>{{msgB}}</h2>
    <button @click="newCount">new Count</button>
    <h3>{{addCount}}</h3>
    <button @click="remoteCount">remote count</button>
    <hr>
    <h1>modele C</h1>
    <h2>{{msgC}}</h2>
    <button @click="newCountC">new Count</button>
    <h3>{{addCountC}}</h3>
    <button @click="remoteCountC">remote count</button>
  </div>
</template>

<script>
export default {
  name: 'vuex1',
  computed:{ // 使用计算属性实时更新数据状态 --- state getters
    // modA
    msg(){
      return this.$store.state.modA.msg;
    },
    nums(){
      return this.$store.getters['modA/filteredNums'];
    },
    numsCount(){
      return this.$store.getters['modA/numsCount'];
    },
    // modB
    msgB(){
      return this.$store.state.modB.count;
    },
    addCount(){
      return this.$store.getters['modB/addCount'];
    },
    //modC
    msgC(){
      return this.$store.state.modB.moduleC.count;
    },
    addCountC(){
      return this.$store.getters['modB/moduleC/addCountC'];
    },
  },
  methods:{ // --- mutations actions
    // modA
    updateMsg(){
      this.$store.commit('modA/changeMsg'); // 只提交需要执行的方法名称
    },
    reduceMsg(){
      let parm = "这是参数";
      this.$store.commit('modA/reduceMsg', parm); // 传递 方法名，参数
    },
    anUpdateMs(){
      this.$store.dispatch('modA/changeMsgAn'); // 异步操作数据，处理业务逻辑
    },

    //modB
    newCount(){
      this.$store.commit('modB/newCount');
    },
    remoteCount(){
      this.$store.dispatch('modB/remoteCount');
    },

    //modC
    newCountC(){
      this.$store.commit('modB/moduleC/newCountC');
    },
    remoteCountC(){
      this.$store.dispatch('modB/moduleC/remoteCountC');
    },

  },
  
}
</script>

<style scoped>
</style>
