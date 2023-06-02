<template>
  <div id="technology">
    <h1 class="title">技术支持</h1>
    <div class="foreword">
      <p>这个博客是我对前后端所学的一次运用</p>
      <p>页面使用的是rem布局和媒体查询,对h5和web页面进行了兼容</p>
    </div>
    <div class="content">
      <div class="content_list">
        <div class="header">使用的相关技术</div>
        <div class="content_show">
          <p>最近把后端的SpringBoot技术学完了,这不得写个博客爽一下,打开我心爱的idea...</p>
          <p>前端技术主要使用Vite + Vue3 + TypeScript + ElementPlus + md-editor-v3</p>
          <p>后端技术主要使用SpringBoot + Mysql + Redis</p>
        </div>
      </div>

      <div class="content_list">
        <div class="header">我能给你解答的问题有</div>
        <div class="content_show">
          <ul>
            <li>前端vue2、vue3、uniapp、微信小程序等前端相关问题</li>
            <li>域名申请，DNS配置遇到的问题技术支持</li>
            <li>linux服务器配置</li>
            <li>Nginx 反向代理</li>
            <li>域名备案、SSL证书配置</li>
          </ul>
        </div>

        <div class="header">支持我</div>
        <img src="@/assets/images/zhifu.jpg" alt="" style="width: 258px;">
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