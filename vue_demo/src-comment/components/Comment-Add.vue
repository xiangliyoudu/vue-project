<template>
  <div class="col-md-6">
    <form action class="form-horizontal">
      <div class="form-group">
        <label for>
          user:
          <input v-model="user" type="text" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <label for>
          content:
          <textarea v-model="content" class="form-control" rows="6"></textarea>
        </label>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <input @click="add" type="submit" name="submit" class="btn btn-default pull-right" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentAdd",
  props: {
    addComment: {
      Function,
      required: true
    }
  },
  data() {
    return {
      user: "",
      content: ""
    };
  },
  methods: {
    add(e) {
      e.preventDefault();
      let {user, content} = this;
      if (user.trim() === "" || content.trim() === "") {
        return;
      }
      let comment = {};
      comment.user = user;
      comment.content = content;
      this.addComment(comment);
      this.user = "";
      this.content = "";
    }
  }
};
</script>

<style>
</style>