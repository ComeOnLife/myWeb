<template>
  <div id="write_article">
    <h1 class="title">{{ route.meta.title }}</h1>
    <div class="header">
      <el-form :inline="true" :model="formInline" ref="ruleFormRef" :rules="rules">
        <el-form-item label="标题: " prop="title">
          <el-input v-model="formInline.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="分类: " prop="categoryId">
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
    <MdEditor v-model="formInline.content" @onUploadImg="onUploadImg" />
    <div class="handle">
      <div class="save" @click="save(ruleFormRef)" autofocus>发布</div>
    </div>
  </div>

  <addCategory :dialogFormVisible="dialogFormVisible" @updateDlogState="updateDlogState" @confrmAdd="confrmAdd" />
  
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import addCategory from "./components/addCategory.vue";
import { getCurrentInstance } from "vue"
import { addCategoryRequest, getCategoryRequest, Form, addWebDataRequest, WebData, useUpdateImageRequest } from "./hooks"
import { useGetWebDataRequest } from '@/hooks'
import type { FormInstance, FormRules } from 'element-plus'
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton} from "element-plus"
import {baseURL} from "@/common/axios.ts"

const { appContext: { config: { globalProperties } } } = getCurrentInstance()!
const route = useRoute()
const router = useRouter()
// id 如果是编辑博客过来的会传id
const id: any = ref(0)

const dialogFormVisible = ref(false)
const formInline = reactive<WebData>({ //要填写的
  title: '',
  categoryId: '',
  content: ''
})
const categorList = reactive({
  list: <any>[]
})
//规则验证
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入文章标题', trigger: 'blur' },
  ],
  categoryId: [
    { required: true, message: '请选择分类', trigger: 'blur' },
  ],
})

onMounted(async () => {
  getCategorList() //获取分类列表
  id.value = route.query.id
  //如果是编辑进入的需要获取数据
  if (id.value) {
    const res = await useGetWebDataRequest(globalProperties, id.value)
    console.log(res);
    formInline.title = res[0].title
    formInline.categoryId = res[0].categoryId
    formInline.content = res[0].content
    formInline.id = res[0].id
  }

})


/**
 * 新增保存博客
 */
const save = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      const save: boolean = await addWebDataRequest(globalProperties, formInline)
      if (save) {
        router.push({
          path: "/allArticles",
        })
      }
    }
  })
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

const onUploadImg = async (files:Array<File>, callback: (urls: Array<string>) => void) => {
  console.log(files);
  const res:Array<any> = await Promise.all(
    Array.from(files).map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);
        useUpdateImageRequest(globalProperties, form).then(res => rev(res)).catch(err => rej(err))
      });
    })
  );
  callback(res.map( i => `${baseURL}/download?name=${i}`))
    
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
    // background: #fff;
    height: 50px;
    // border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;

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
    height: 90%;
  }
  
}
</style>