<template>
  <div id="technology">
    <h1 class="title">技术支持</h1>
    <div class="foreword">
      <p>博客源码在上，你的 Star 是我更新的动力，谢谢~</p>
      <p>遇到问题请先自行排查，可以直接在里面提问，不过回复的可能不及时。</p>
      <p>目前我已经给很多小伙伴做过单独的技术支持了，现在设置 付费支持功能</p>
    </div>
    <div class="content">
      <div class="content_list">
        <div class="header">付费打赏支持</div>
        <div class="content_show">
          <p>如果你付费了，请邮件联系我，把付费的截图和你的QQ号一起发给我, 感谢你的赞助。</p>
          <p>你向我提问题我也要花时间帮你解答，付费多少看你自己的心意，</p>
          <p>注:  付款后概不退款，拒绝扯皮，我的博客模板一直都是免费给大家使用。</p>
        </div>
      </div>

      <div class="content_list">
        <div class="header">我能给你解答的问题有</div>
        <div class="content_show">
          <ul>
            <li>Hexo 、Jekyll 搭建个人博客遇到的问题技术支持</li>
            <li>域名申请，DNS配置遇到的问题技术支持</li>
            <li>自建服务器部署个人博客，服务器配置</li>
            <li>Nginx 反向代理、supervisor 守护进程</li>
            <li>域名备案、SSL证书配置</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  #technology {
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