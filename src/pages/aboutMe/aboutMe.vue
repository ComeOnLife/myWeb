<template>
  <div id="about_me">
    <h1 class="title">关于我</h1>
    <div class="foreword">
      <p>一个工作6年的 iOS SDK 开发者，在一家游戏公司做SDK开发和维护。</p>
      <p>除了iOS技术，我还一直维护着这个博客，懂一些前端的基础知识。</p>
      <p>平时喜欢用python写一些工具，能用工具做的事情坚决不用人工去操作。</p>
    </div>
    <div class="content">
      <div class="content_list">
        <div class="header"> 搭建博客遇到了问题解法方法 </div>
        <div class="content_show">
          <p>如果你付费了，请邮件联系我，把付费的截图和你的QQ号一起发给我, 感谢你的赞助。</p>
          <p>你向我提问题我也要花时间帮你解答，付费多少看你自己的心意，</p>
          <p>注:  付款后概不退款，拒绝扯皮，我的博客模板一直都是免费给大家使用。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  #about_me {
    .title {
      margin-bottom: 10px;
    }
    .content {
      .header {
        font-size: 1.2em;
        text-indent: 4px;
        border-radius: 4px;
        padding: 6px 15px;
        margin-bottom: 20px;
        margin-top: 5px;
        background: #B9D3EE;
        box-shadow: 0px 5px 5px #9FB6CD;
        border-left: 6px solid #1874CD;
        position: relative;
        color: #333;
      }
      .content_show {
        font-size: 0.7rem;
        a {
          color: #00688B;
        }
        ul {
          margin: 0 0 1.3em 2.5em;
        }
      }
    }
  }

</style>