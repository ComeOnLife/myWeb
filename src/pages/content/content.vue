<template>
  <div class="title">{{ dataContent.content.title }}</div>
  <div class="date_time">{{ dayjs(dataContent.content.createTime).format("YYYY-MM-DD hh:mm:ss") }}</div>
  <div class="content">
    <MdPreview :editorId="String(dataContent.content.id)" :modelValue="dataContent.content.content" />
  </div>
</template>

<script setup lang="ts">
  import {getCurrentInstance, onBeforeMount, reactive} from "vue"
  import {useGetWebDataRequest} from "@/hooks"
  import * as dayjs from 'dayjs'

  const globalProperties:any = getCurrentInstance()?.appContext.config.globalProperties

  
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
    // .content {
    //   border-left: 3px solid #12B2F8;
    //   padding-right: 0.5rem;
    //   font-size: .9em;
    //   text-indent: 2em;
    //   color: #4F4F4F;
    //   line-height: 1.7em;
    //   padding-left: 1rem;
    //   overflow: hidden;
    //   text-overflow: ellipsis;
    //   display: -webkit-box;
    //   -webkit-line-clamp: 3;
    //   -webkit-box-orient: vertical;
    // }
</style>