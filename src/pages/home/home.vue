<template>
  <div id="home">
    <el-card shadow="always" :body-style="{padding: 0}" v-for="item in bokList" :key="item.id">
      <div class="title">{{ item.title }}</div>
      <div class="date_time">{{ item.date_time }}</div>
      <div class="content">{{ item.content }}</div>
      <router-link class="show_content" to="">芝麻开门，显示全文！</router-link>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  const bokList = [
    {
      id:0,
      title: "博客模板功能介绍",
      date_time: "2020-07-11",
      content: "在此之前我有写过一篇如何使用我博客模板的文章 请先看这篇基础集成，这篇文章主要讲的是如何使用和修改我的博客主题，文章内容含以下几点：博客特性 适配电脑、手机、平板等各屏幕 响应式设计 个性化头像 每篇文章自动添加打赏功能 支持Disqus、livere评论系统 支持站点总数访问统计，每篇文章访问统计 支持文章自动生成目录 支持标签分类 支持代码高亮 支持文章H1、H2、H3、H4标题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持"
    },
    {
      id:1,
      title: "博客模板功能介绍",
      date_time: "2020-07-11",
      content: "在此之前我有写过一篇如何使用我博客模板的文章 请先看这篇基础集成，这篇文章主要讲的是如何使用和修改我的博客主题，文章内容含以下几点：博客特性 适配电脑、手机、平板等各屏幕 响应式设计 个性化头像 每篇文章自动添加打赏功能 支持Disqus、livere评论系统 支持站点总数访问统计，每篇文章访问统计 支持文章自动生成目录 支持标签分类 支持代码高亮 支持文章H1、H2、H3、H4标题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持"
    },
    {
      id:2,
      title: "博客模板功能介绍",
      date_time: "2020-07-11",
      content: "在此之前我有写过一篇如何使用我博客模板的文章 请先看这篇基础集成，这篇文章主要讲的是如何使用和修改我的博客主题，文章内容含以下几点：博客特性 适配电脑、手机、平板等各屏幕 响应式设计 个性化头像 每篇文章自动添加打赏功能 支持Disqus、livere评论系统 支持站点总数访问统计，每篇文章访问统计 支持文章自动生成目录 支持标签分类 支持代码高亮 支持文章H1、H2、H3、H4标题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持"
    },
    {
      id:3,
      title: "博客模板功能介绍",
      date_time: "2020-07-11",
      content: "在此之前我有写过一篇如何使用我博客模板的文章 请先看这篇基础集成，这篇文章主要讲的是如何使用和修改我的博客主题，文章内容含以下几点：博客特性 适配电脑、手机、平板等各屏幕 响应式设计 个性化头像 每篇文章自动添加打赏功能 支持Disqus、livere评论系统 支持站点总数访问统计，每篇文章访问统计 支持文章自动生成目录 支持标签分类 支持代码高亮 支持文章H1、H2、H3、H4标题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持"
    },
    {
      id:4,
      title: "博客模板功能介绍",
      date_time: "2020-07-11",
      content: "在此之前我有写过一篇如何使用我博客模板的文章 请先看这篇基础集成，这篇文章主要讲的是如何使用和修改我的博客主题，文章内容含以下几点：博客特性 适配电脑、手机、平板等各屏幕 响应式设计 个性化头像 每篇文章自动添加打赏功能 支持Disqus、livere评论系统 支持站点总数访问统计，每篇文章访问统计 支持文章自动生成目录 支持标签分类 支持代码高亮 支持文章H1、H2、H3、H4标题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持题样式多样化 支持多种三方社交icon展示，能从博客直接跳转到自己的三方社交主页 支持"
    },
  ]
</script>

<style scoped lang="scss">
#home {
  .el-card:hover {
    box-shadow: 0px 0px 10px 3px #c9e1f6;
    transition: all 0.5s ease-in-out;
  }
  .el-card {
    height: 9rem;
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
    .title {
      font-size: 1.5em;
      line-height: 1.3em;
      font-weight: bold;
      color: #333333;
      padding: 0.5rem 0 0.2rem 0.5rem;
    }
    .date_time {
      color: #999;
      padding: 0.3rem 0.5rem;
    }
    .content {
      border-left: 3px solid #12B2F8;
      padding-right: 0.5rem;
      font-size: .9em;
      text-indent: 2em;
      color: #4F4F4F;
      line-height: 1.7em;
      padding-left: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .show_content {
       padding: 0.5rem 0 0.2rem 1rem;
       text-indent: 2em;
       color: #a9a4a4;
       display: inline-block;
    }
    .show_content:hover {
      color: #1289F8;
      transition: all 0.5s linear;
    }
  }
}
</style>