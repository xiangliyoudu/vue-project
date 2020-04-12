<template>
  <li @mouseenter="changeBG(true)" @mouseleave="changeBG(false)" :class="{bgColor: isActive}">
    <div class="form-inline">
      <label>
        <input type="checkbox" v-model="todo.checked" />
        {{todo.content}}
      </label>
    <button @click="deleteTodo(index)" v-show="isShow" class="btn btn-primary">delete</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      Object,
      required: true
    },
    index: {
      Number,
      required: true
    },
    deleteTodo: {
      Function,
      required: true
    }
  },
  data() {
    return {
      isActive: false,
      isShow: false
    };
  },
  methods: {
    changeBG(flag) {
      this.isActive = flag;
      this.isShow = flag;
    }
  }
};
</script>

<style>
.bgColor {
  background-color: #ccc;
}
li {
  height: 35px;
}
</style>
