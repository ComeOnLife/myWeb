<template>
  <div class="title">{{ dataContent.content.title }}</div>
  <div class="date_time">{{ dayjs(dataContent.content.createTime).format("YYYY-MM-DD hh:mm:ss") }}</div>
  <div class="content" v-show="dataContent.content.id">
    <div class="left">
      <div class="catalog catalog_title">目录</div>
      <MdCatalog :editorId="String(dataContent.content.id)" :scrollElement="scrollElement" />
    </div>
    <div class="content_title">内容</div>
    <MdPreview :editorId="String(dataContent.content.id)" :modelValue="dataContent.content.content" />
    <el-backtop />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onBeforeMount, reactive } from "vue"
import { useGetWebDataRequest } from "@/hooks"
import * as dayjs from 'dayjs'

const globalProperties: any = getCurrentInstance()?.appContext.config.globalProperties
const scrollElement = document.documentElement;


let dataContent = reactive<any>({
  content: {}
})

onBeforeMount(async () => {
  console.log(globalProperties);

  dataContent.content = await useGetWebDataRequest(globalProperties, globalProperties.$route.query.id)
  dataContent.content = dataContent.content[0]
  console.log(dataContent);
})

</script>

<style scoped lang="scss">
.title {
  font-size: 1.6rem;
  line-height: 1.3em;
  font-weight: bold;
  color: #333333;
  padding: 0.5rem 0 0.2rem 0.5rem;
}

.date_time {
  color: #999;
  padding: 0.3rem 0.5rem;
}

@media screen and (min-width: 1100px) {
  .content {
    .left {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      z-index: 999;
      background: #ecf5ff;
      height: 70%;
      overflow-y: scroll;
      border-radius: 1rem;

      .catalog {
        font-size: 1.2rem;
        padding-left: 0.5rem;
        text-indent: 4px;
        border-radius: 4px;
        padding: 6px 15px;
        margin-bottom: 20px;
        margin-top: 5px;
        color: #333;
        border-bottom: 1px solid #9b9b9b;
      }
    }

    .content_title {
      display: none;
    }

    .el-backtop {
      right: 100px !important;
      bottom: 50px !important;
    }


    .md-editor-catalog {
      padding-left: 0.75rem;
    }
  }
}

@media screen and (max-width: 1100px) {

  .content_title,
  .catalog_title {
    font-size: 1.2rem;
    padding-left: 0.5rem;
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
}</style>