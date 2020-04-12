
<template>
  <div style="border: 1px solid; padding:5px;margin-top:5px;">
    <ul>
      <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :deleteTodo="deleteTodo" :index="index"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem
  },
  props: {
    todos: {
      Array,
      required: true
    },
    deleteTodo: {
      Function,
      required: true
    }
  }
};
</script>

<style>
</style>