<template>
  <div id="home">
    <template v-for="item in webDataList.list" :key="item.id">
      <el-card shadow="hover" :body-style="{padding: 0}" @click="toContent(item.id)">
      <div class="title">{{ item.title }}</div>
      <div class="date_time">{{ dayjs(item.createTime).format("YYYY-MM-DD") }}</div>
      <div class="content">{{ item.content }}</div>
      <router-link class="show_content" :to="'/content?id=' + item.id">芝麻开门，显示全文！</router-link>
    </el-card>
    </template>
  </div>
</template>

<script setup lang="ts">
  import {getCurrentInstance, onMounted, reactive} from "vue"
  import {useGetWebDataRequest} from "@/hooks"
  import dayjs from 'dayjs'

  const globalProperties:any = getCurrentInstance()?.appContext.config.globalProperties
  const webDataList = reactive<any>({
    list: new Array()
  })
  onMounted(async () => {
    webDataList.list = await useGetWebDataRequest(globalProperties);
    webDataList.list.forEach((e:any) => {
      e.content = e.content.match(/[\u4e00-\u9fa5a-zA-Z，。]+/g).join()
    });
  })
  const toContent = (id:number):void => {
    globalProperties.$router.push({
      path: '/content',
      query: {
        id
      }
    })
  }
</script>

<style scoped lang="scss">
#home {
  .el-card:hover {
    box-shadow: 0px 0px 10px 3px #c9e1f6;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
  .el-card {
    height: 9rem;
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    .title {
      font-size: 1.5em;
      line-height: 1.3em;
      font-weight: bold;
      color: #333333;
      padding: 0.5rem 0 0.2rem 0.5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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