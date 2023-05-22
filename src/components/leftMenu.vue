<template>
  <!-- 背景图 -->
  <div class="bg_img">
    <!-- 遮罩 -->
    <div class="mask"></div>
  </div>

  <!-- 内容 -->
  <div class="content">
    <!-- 头像 -->
    <div class="avatar">
      <img src="~assets/images/avatar.jpg" alt="">
    </div>
    <!-- 欢迎欢迎 -->
    <div class="description">
      <div>莫强</div>
      <div>个人博客</div>
      <hr>
      <div>欢迎来到我的个人博客~</div>
      <hr>
      <div class="tag">
        <router-link to="/home">博客主页</router-link>
        <router-link to="/allArticles">所有文章</router-link>
        <router-link to="/tag">标签</router-link>
        <router-link to="/technology">技术支持</router-link>
        <router-link to="/aboutMe">关于我</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  //背景
.bg_img {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/infinity-8116002.jpg") no-repeat;
  background-size: cover;
  z-index: -1;

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(140deg, rgba(80, 134, 196, 0.6) 20%, rgba(30, 8, 5, .8));
    background-color: rgba(80, 134, 196, 0.6);
  }
}

//内容
.content {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 31rem;
  text-align: center;

  .avatar {
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      border: 0.15rem solid #fff;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, .3);
    }
  }

  .description {
    color: #fff;
    letter-spacing: 0.15rem;
    white-space: nowrap;
    div:nth-of-type(1) {
      margin: 0 0 0.25rem;
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 0.3rem;
    }

    div:nth-of-type(2) {
      color: #ccc;
      font-size: 0.6rem;
      font-weight: lighter;
    }

    div:nth-of-type(3),
    div:nth-of-type(4) {
      text-shadow: 0 1px 1px rgba(0, 0, 0, .4);
      line-height: 1.2rem;
      font-weight: 100;
      font-size: 0.7rem;
    }

    hr:nth-of-type(1),
    hr:nth-of-type(2) {
      border: none;
      width: 12rem;
      margin: 1rem auto;
      border-top: 0.05rem solid rgba(255, 255, 255, .14);
    }

    hr:nth-of-type(2) {
      width: 5rem;
    }
    .tag a {
      margin-left: 0.5rem;
      font-size: 0.6rem;
      color: #a9a4a4;
    }
    .tag a:hover {
      color: #fff;
      transition: all 0.5s linear;
    }
  }
}
</style>