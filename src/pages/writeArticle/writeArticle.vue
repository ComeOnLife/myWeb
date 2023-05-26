<template>
  <div id="write_article">
    <h1 class="title">{{ route.meta.title }}</h1>
    <div class="header">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="标题: ">
          <el-input v-model="formInline.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="分类: ">
          <el-select v-model="formInline.categoryId" placeholder="所属分类">
            <el-option :label="item.category" :value="item.id" v-for="item in categorList.list"
              :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dialogFormVisible = true">新增分类</el-button>
        </el-form-item>
      </el-form>
    </div>
    <MdEditor v-model="formInline.content" />
    <div class="handle">
      <div class="save" @click="save" autofocus>发布</div>
    </div>
  </div>

  <addCategory :dialogFormVisible="dialogFormVisible" @updateDlogState="updateDlogState" @confrmAdd="confrmAdd" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRoute, useRouter } from "vue-router"
import addCategory from "./components/addCategory.vue";
import { getCurrentInstance } from "vue"
import { addCategoryRequest, getCategoryRequest, Form, addWebDataRequest, WebData } from "./hooks"

const { appContext: { config: { globalProperties } } } = getCurrentInstance()!
const route = useRoute()
const router = useRouter()
const dialogFormVisible = ref(false)
const formInline = reactive<WebData>({ //要填写的
  title: '',
  categoryId: '',
  content: ''
})
const categorList = reactive({
  list: <any>[]
})


/**
 * 新增保存博客
 */
const save = async () => {
  const save:boolean = await addWebDataRequest(globalProperties, formInline)
  if(save) {
      router.push({
      path: "/allArticles",
    })
  }
}

//修改新增种类弹出框的类型
const updateDlogState = (state: boolean) => {
  dialogFormVisible.value = state
}
/**
 * 新增分类
 * @param form 
 */
const confrmAdd = async (form: Form) => {
  const save: boolean = await addCategoryRequest(globalProperties, form)
  if (save) {
    dialogFormVisible.value = false
    getCategorList()
  }
}
/**
 * 获取分类
 */
const getCategorList = async () => {
  categorList.list = await getCategoryRequest(globalProperties)
  console.log(categorList.list);
}
getCategorList()

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