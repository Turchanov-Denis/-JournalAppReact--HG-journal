<template>
  <article class="article-extend">
    <div class="article-extend__content">
      <!-- header -->
      <div class="article-header">
        <img
          class="article-header__user-icon"
          src="../HeaderComponent/UserBarImage/avatar.png"
        />
        <div class="article-header__user-name">{{ userName }}</div>
      </div>
      <!-- title -->
      <div class="article__title">{{ title }}</div>
      <div class="article__subtitle">{{ subtitle }}</div>
    </div>
    <!-- main image -->
    <img class="article-extend__image" src="./article.png" />
    <div class="article-extend__content">
      <!-- action bar -->
      <div class="action-bar">
        <div class="action-bar__column" style="width: 320px">
          <button class="action-bar__icon">
            <img src="./actionBarImage/comment.png" alt="favorites" />
          </button>

          <button class="action-bar__icon">
            <img src="./actionBarImage/mark.png" alt="favorites" />
          </button>

          <button class="action-bar__icon">
            <img src="./actionBarImage/share.png" alt="favorites" />
          </button>
        </div>
        <div class="action-bar__column">
          <button class="action-bar__icon">
            <img
              src="./actionBarImage/arrow.png"
              alt="favorites"
              style="opacity: 0.5"
            />
          </button>
          <div class="action-bar__count">{{ count }}</div>
          <button class="action-bar__icon">
            <img
              src="./actionBarImage/arrow.png"
              style="transform: scale(-1); opacity: 0.5"
              alt="favorites"
            />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
    
    <script>
export default {
  props: ["title", "subtitle", "userName", "count"],
  data() {
    return {};
  },
};
</script>
  
    <style lang="scss">
.article-extend {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: rgb(253, 252, 252);
  border-radius: 10px;
  margin: 0 auto;
  flex-grow: 1;
  &__content {
    width: 800px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  &__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 23px;
    color: rgb(23, 23, 23);
  }
  &__subtitle {
    margin-top: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: rgb(23, 23, 23);
  }
  &__image {
    width: 90%;
    
  }
}
.article-header {
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

.action-bar {
  padding: 0 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__column {
    display: flex;
    align-items: center;
  }
  &__icon {
    width: 20px;
    height: 20px;
    margin: 0 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__count {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: rgb(71, 218, 52);
  }
}
</style>