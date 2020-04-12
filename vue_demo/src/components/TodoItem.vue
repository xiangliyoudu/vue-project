<template>
  <li>
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="todo.checked" />
        {{todo.content}}
      </label>
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
  }
};
</script>

<style>
</style>
