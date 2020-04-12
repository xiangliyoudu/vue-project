<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 appheader">
        <TodoHeader :addTodo="addTodo" />
        <TodoList :todos="todos" :deleteTodo="deleteTodo" />
        <TodoFooter :todos="todos" :checkAll="checkAll" :deleteCheckedTodos="deleteCheckedTodos" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: { TodoHeader, TodoList, TodoFooter },
  data() {
    return {
      // 从localstorage读取todos
      todos: JSON.parse(window.localStorage.getItem("todos_key") || "[]")
    };
  },
  watch: {
    todos: {
      // 如果 `todos` 发生改变，这个函数就会运行
      handler: function(newtodos) {
        // 将新的 json 值保存在localstorage中
        window.localStorage.setItem("todos_key", JSON.stringify(newtodos));
      },
      // 该回调将会在侦听开始之后被立即调用
      immediate: true,
      // 深度监听
      deep: true
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    deleteCheckedTodos() {
      this.todos = this.todos.filter(item => !item.checked);
    },
    checkAll(flag) {
      this.todos = this.todos.map(todo => ({
        checked: flag,
        content: todo.content
      }));
    }
  }
};
</script>

<style>
.appheader {
  border: 1px solid;
  padding: 5px;
  margin-top: 100px;
}
</style>