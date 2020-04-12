<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 appheader">
        <TodoHeader :addTodo="addTodo" />
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter
          :todosLength="todosLength"
          :checkedTodosLength="checkedTodosLength"
          :clearTodos="clearTodos"
          :checkAll="checkAll"
        />
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
      todos: [
        { checked: false, content: "aaa" },
        { checked: true, content: "bbb" },
        { checked: false, content: "ccc" }
      ]
    };
  },
  computed: {
    todosLength() {
      return this.todos.length;
    },
    checkedTodos() {
      return this.todos.filter(item => item.checked);
    },
    checkedTodosLength() {
      return this.checkedTodos.length;
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    clearTodos() {
      this.todos.splice(0, this.todosLength);
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