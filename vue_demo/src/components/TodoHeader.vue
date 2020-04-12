<template>
  <form class="form-inline">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="enter ..." v-model="content" />
    </div>
    <input type="submint" value="Add" class="btn btn-default" @click="saveTodo" />
  </form>
</template>

<script>
export default {
  props: {
    addTodo: {
      Function,
      required: true
    }
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    saveTodo(e) {
      e.preventDefault();
      if (this.content.trim() === "") {
        return;
      }
      let todo = { checked: false, content: this.content };
      this.addTodo(todo);
      this.content = '';
    }
  }
};
</script>

<style>
</style>
