<template>
  <!-- 新增分类对话框 -->
  <el-dialog :model-value="props.dialogFormVisible" title="新增分类" width="400px" @close="form.category = ''">
    <el-form :model="form">
      <el-form-item label="分类" required>
        <el-input v-model="form.category" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('updateDlogState', false)">取消</el-button>
        <el-button type="primary" @click="confirm">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive} from 'vue'
import { getCurrentInstance } from "vue"

const {appContext: {config: {globalProperties}}} = getCurrentInstance()!

const props = defineProps<{
  dialogFormVisible: boolean
}>()
const emits = defineEmits<{
  confrmAdd: [form: object]
}>()

const form = reactive({
  category: ''
})
const confirm = () => {
  if(!form.category) {
    return globalProperties.$message.error("请输入分类")
  }
  emits("confrmAdd", form)
}
</script>

<style scoped></style>