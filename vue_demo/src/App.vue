<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表评论</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <CommentAdd :addComment="addComment" />
        <CommentList :comments="comments" :deleteComment="deleteComment" />
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from "./components/Comment-List.vue";
import CommentAdd from "./components/Comment-Add.vue";

export default {
  name: "App",
  components: {
    CommentList,
    CommentAdd
  },
  data() {
    return {
      comments: []
    };
  },
  methods: {
    addComment: function(comment) {
      this.comments.unshift(comment);
    },
    deleteComment: function(index) {
      this.comments.splice(index, 1);
    }
  },
  mounted() {
    this.timerId = setTimeout(() => {
      this.comments = [
        { user: "mike", content: "you are beautiful" },
        { user: "lucy", content: "yeah, you are right ^_^" }
      ];
    }, 1000);
  },
  beforeDestroy() {
    clearTimeout(this.timerId);
  }
};
</script>

<style>
</style>