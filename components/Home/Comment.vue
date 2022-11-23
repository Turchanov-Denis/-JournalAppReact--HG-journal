<template>
  <div :class="this.$store.state.main.activeComment ? 'comment' : 'hide'">
    <div class="comment-header">
      <img
        class="comment-header__user-icon"
        src="../HeaderComponent/UserBarImage/avatar.png"
      />
      <div class="comment-header__user-name">{{ userName }}</div>
    </div>
    <div class="comment__text">
      {{ text }}
    </div>
  </div>
</template>


<script>
export default {
  props: ["userName", "text"],
};
</script>


<style lang="scss">
.comment {
  width: 320px;
  
  &__text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: rgb(23, 23, 23);
  }
}
.comment-header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &__user-icon {
    width: 30px;
    height: 30px;
  }
  &__user-name {
    margin-left: 10px;
  }
}
.hide {
  display: none;
}
</style>