<template>
  <div id="all_articles">
    <h1 class="title">{{ globalProperties.$route.meta.title }}</h1>
    <div class="content">
      <div class="content_list">
        <!-- <div class="header">2020</div> -->
        <div class="content_show">
          <ul>
            <template v-for="item in webDataList.list" :key="item.id">
              <div class="li">
                <li @click="showContent(item.id)">
                  {{ dayjs(item.createTime).format("YYYY-MM-DD hh:mm:ss") }} »
                  <router-link to="">{{ item.title }}</router-link>
                  <el-button type="danger" :icon="Delete" circle size="small" plain @click.stop="deleteWebData(item.id)" />
                  <el-button type="primary" :icon="Edit"  circle size="small" plain @click.stop="editWebData(item.id)" />
                </li>
              </div>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onBeforeMount, reactive } from "vue"
import { useGetWebDataRequest, useDeleteWebDataRequest } from "@/hooks"
import * as dayjs from 'dayjs'
import { ElButton } from "element-plus";
import {Delete, Edit} from '@element-plus/icons-vue'

const globalProperties: any = getCurrentInstance()?.appContext.config.globalProperties
const webDataList = reactive<any>({
  list: new Array()
})
onBeforeMount(async () => {
  webDataList.list = await useGetWebDataRequest(globalProperties, undefined, 1, 100);

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
//删除
const deleteWebData = ((id:number):void => {
  globalProperties.$confirm("您确定要删除吗?","提示", {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(async () => {
      await useDeleteWebDataRequest(globalProperties,id)
      webDataList.list = await useGetWebDataRequest(globalProperties, undefined, 1, 100);
    })
})
//编辑
const editWebData = ((id: Number):void => {
  console.log(id);
  globalProperties.$router.push({
    path: "/writeArticle",
    query: {
      id,
    }
  })
})
</script>

<style scoped lang="scss">
#all_articles {
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
      .el-button {
        margin-left: 0.3rem;
      }
    }
  }
}
</style>