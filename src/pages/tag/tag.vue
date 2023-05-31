<template>
  <div id="tag">
    <h1 class="title">文章归档</h1>
    <div class="content">
      <div class="content_list" v-for="item in webDataList.list" :key="item.id">
        <div class="header" v-if="item.list?.length">{{ item.category }}</div>
        <div class="content_show">
          <ul>
            <template v-for="data in item.list">
              <li @click="showContent(data.id)"><router-link to="" :key="data.id">{{ data.title }}</router-link></li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template> 

<script setup lang="ts">
import { getCurrentInstance, onBeforeMount, reactive } from "vue"
import { useGetWebDataAndCategaryRequest } from "@/hooks"

const { appContext: { config: { globalProperties } } } = getCurrentInstance()!
let webDataList = reactive({
  list: new Array()
})

onBeforeMount(async () => {
  webDataList.list = await useGetWebDataAndCategaryRequest(globalProperties)
  console.log(webDataList);
})

//跳转显示content
const showContent = (id: number): void => {
  globalProperties.$router.push({
    path: '/content',
    query: {
      id
    }
  })
}

</script>

<style scoped lang="scss">
#tag {
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
}</style>