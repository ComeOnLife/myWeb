<template>
  <div id="all_articles">
    <h1 class="title">所有文章</h1>
    <div class="content">
      <div class="content_list">
        <div class="header">2020</div>
        <div class="content_show">
          <ul>
            <li>2020-07-11 »<router-link to="">博客模板功能介绍</router-link></li>
            <li>2020-07-10 »<router-link to="">博客迭代记录</router-link></li>
          </ul>
        </div>
      </div>

      <div class="content_list">
        <div class="header">2016</div>
        <div class="content_show">
          <ul>
            <li>2020-07-11 »<router-link to="">文档支持的Markdown语法</router-link></li>
            <li>2020-07-10 »<router-link to="">Jekyll搭建个人博客</router-link></li>
          </ul>
        </div>
      </div>

      <div class="content_list">
        <div class="header">2015</div>
        <div class="content_show">
          <ul>
            <li>2020-07-11 »<router-link to="">HEXO搭建个人博客</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import {getCurrentInstance} from "vue"

  // const markdown = getCurrentInstance()?.appContext.config.globalProperties.markdown
  // console.log(markdown);
</script>

<style scoped lang="scss">
  #all_articles {
    margin: 3rem 5rem 0 13rem;
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
        margin: 0 0 1.3em 2.5em;
        font-size: 0.7rem;
        a {
          color: #00688B;
        }
      }
    }
  }
</style>