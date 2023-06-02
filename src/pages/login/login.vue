<template>
  <!-- 背景图 -->
  <div class="bg_img">
    <!-- 遮罩 -->
    <div class="mask"></div>
  </div>
  <!-- 登录 -->
  <div class="login">
    <el-avatar :size="70" :src="avatarImg"></el-avatar>
    <el-form :model="formLabelAlign" size="medium" :rules="rules" ref="ruleFormRef">
      <el-form-item prop="username">
        <el-input v-model="formLabelAlign.username" placeholder="请输入用户名" :prefix-icon="User">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="formLabelAlign.password" placeholder="请输入密码" type="password" :prefix-icon="Lock">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toLogin(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import avatarImg from "@/assets/images/avatar.jpg"
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { getCurrentInstance } from "vue"

const {appContext: {config: {globalProperties}}} = getCurrentInstance()!
const ruleFormRef = ref<FormInstance>()
const formLabelAlign = reactive({
  username: '',
  password: '',
})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, message: '密码长度不能低于五位数', trigger: 'blur' },
  ],
})

//如果已经登录返回home页
if(JSON.parse(localStorage.getItem("userinfo")!)) {
  globalProperties.$message.success("已登录")
  globalProperties.$router.push("/home")
}
/**
 * 
 * @param formEl 
 * 发登录请求
 */
const toLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      const res = await globalProperties.$post("/login", formLabelAlign)
      if(res.code == 1) {
        localStorage.setItem("userinfo", JSON.stringify(res.data))
        globalProperties.$message.success("登录成功")
        globalProperties.$router.push("/home")
      }else {
        globalProperties.$message.error("登录失败")
      }
    } else {
      globalProperties.$message.error("请正确填写用户名和密码")
    }
  })
}


</script>

<style scoped lang="scss">
//背景
.bg_img {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/infinity-8116002.jpg") no-repeat;
  background-size: cover;
  z-index: -1;

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(140deg, rgba(80, 134, 196, 0.6) 20%, rgba(30, 8, 5, .8));
    background-color: rgba(80, 134, 196, 0.6);
  }
}

.login {
  width: 300px;
  height: 300px;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  box-shadow: 0px 0px 12px rgba(178, 169, 213, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .el-form {
    width: 250px;
  }

  .el-avatar {
    margin-bottom: 1rem;
  }

  .el-button {
    width: 100%;
    margin-top: 5px;
  }
}</style>