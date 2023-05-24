<template>
  <div id="write_article">
    <h1 class="title">{{ route.meta.title }}</h1>
    <div class="header">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="标题: ">
          <el-input v-model="formInline.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="分类: ">
          <el-select v-model="formInline.category" placeholder="所属分类">
            <el-option label="前端" value="qianduan"></el-option>
            <el-option label="后端" value="houduan"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <MdEditor v-model="formInline.content" />
    <div class="handle">
      <div class="save" @click="save" autofocus>发布</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const formInline = reactive({ //要填写的
  title: '',
  category: '',
  content: ''
})
const save = () => {
  router.push({
    path: "/allArticles",
    query: {
      title: formInline.title,
      category: formInline.category,
      content: formInline.content
    }
  })
}

</script>

<style scoped lang="scss">
#write_article {
  height: 35rem;

  .title {
    margin-bottom: 10px;
  }

  .handle {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 50px;
    z-index: -1;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .save {
      margin-right: 10%;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #409eff;
      border: 1px solid #409eff;
      color: #fff;
      text-align: center;
      box-sizing: border-box;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
  .md-editor {
    height: 100%;
  }
}
</style>