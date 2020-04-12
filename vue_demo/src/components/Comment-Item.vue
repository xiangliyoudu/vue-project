<template>
  <div>
    <li class="list-group-item">
      <div class="handle">
        <button @click="handleDelete(index)">delete</button>
        <p class="user">
          <span>{{comment.user}}</span>
          <span>说：</span>
        </p>
        <p class="centence">{{comment.content}}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: {
      Object,
      required: true
    },
    index: {
      Number,
      required: true
    },
    deleteComment: {
      Function,
      required: true
    }
  },
  methods: {
    handleDelete(index) {
      this.deleteComment(index);
    }
  }
};
</script>

<style scoped>
.reply {
  margin-top: 0px;
}

li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 500px;
  border: 1px solid #ccc;
  background: #fff;
  /* position: absolute; */
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>