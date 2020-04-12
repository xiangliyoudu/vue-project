<template>
  <div>
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="isChecked" :disabled="disabled" />
      </label>
      已选择 {{checkedTodosLength}} / 全部 {{todos.length}}
      <button class="btn btn-danger" @click="deleteCheckedTodos" v-show="checkedTodosLength"
      >clear</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      Array,
      required: true
    },
    deleteCheckedTodos: {
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
    checkedTodosLength() {
      return this.todos.filter(todo => todo.checked).length;
    },
    isChecked: {
      set(checked) {
        this.checkAll(checked);
      },
      get() {
        return (
          this.checkedTodosLength > 0 && this.todos.length === this.checkedTodosLength
        );
      }
    },
    disabled() {
      return this.todos.length === 0;
    },
  }
};
</script>

<style>
</style>
