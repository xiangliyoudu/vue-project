<template>
  <div>
    <div class="checkbox">
      <label>
        <input type="checkbox" @change="switchAll" :checked="checkAllStatus" :disabled="!isEnable" />
      </label>
      已选择 {{checkedTodosLength}} / 全部 {{todosLength}}
      <button
        class="btn btn-danger"
        @click="clearTodos"
      >clear</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todosLength: {
      Number,
      required: true
    },
    checkedTodosLength: {
      Number,
      required: true
    },
    clearTodos: {
      Function,
      required: true
    },
    checkAll: {
      Function,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    checkAllStatus() {
      let { todosLength, checkedTodosLength } = this;
      return todosLength > 0 && todosLength === checkedTodosLength;
    },
    isEnable() {
      return this.todosLength > 0;
    }
  },
  methods: {
    switchAll(flag) {
      window.console.log(this.checkAllStatus);
      this.checkAll(!this.checkAllStatus);
    }
  }
};
</script>

<style>
</style>
