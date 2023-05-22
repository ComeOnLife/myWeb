<template>
  <div id="tag">
    <h1 class="title">文章归档</h1>
    <div class="content">
      <div class="content_list">
        <div class="header">前端</div>
        <div class="content_show">
          <ul>
            <li><router-link to="">如何学习html</router-link></li>
            <li><router-link to="">css重要的样式</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  #tag {
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