<template>
  <div class="comment-extend">
    <div class="comment-extend-header">
      <img
        class="comment-extend-header__user-icon"
        src="../HeaderComponent/UserBarImage/avatar.png"
      />
      <div class="comment-extend-header__user-name">{{ userName }}</div>
    </div>
    <div class="comment-extend__text">
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
.comments-extend {
  width: 100%;
  &__text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: rgb(23, 23, 23);
  }
}
.comment-extend-header {
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
</style>