<template>
  <div class="col-md-6">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="isShow">暂无评论，点击左侧添加评论！！！</h2>
    <ul v-else class="list-group">
      <CommentItem
        v-for="(comment,index) in comments"
        :comment="comment"
        :key="index"
        :deleteComment="deleteComment"
        :index="index"
      />
    </ul>
  </div>
</template>

<script>
import CommentItem from "./Comment-Item.vue";

export default {
  name: "CommentList",
  components: {
    CommentItem
  },
  props: {
    comments: {
      Array,
      required: true
    },
    deleteComment: {
      Function,
      required: true
    }
  },
  computed: {
    isShow() {
      let {comments} = this;
      let commentsLength = comments.length;
      return commentsLength > 0 ? false : true;
    }
  }
};
</script>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>