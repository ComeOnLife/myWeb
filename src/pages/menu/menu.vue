<template>
  <div id="menu">
    <div class="left_menu"><left-menu /></div>
    <div class="content">
      <el-card shadow="always" class="stick_out"> 
       <router-view v-slot="{ Component }">
        <keep-alive exclude="writeArticle">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      </el-card>
      <Ending />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElCard} from "element-plus"
import leftMenu from "../../components/leftMenu.vue";
import Ending from '../../components/Ending.vue'
</script>

<style scoped lang="scss">
.el-card {
  box-shadow: 0 12px 15px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
}
:deep(.beian){ 
    display: none;
}
@media screen and (min-width: 1100px) {
  #menu {
  display: flex;
  .left_menu {
    width: 22%;
    max-width: 16rem;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    z-index: 100;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    margin-left: 16rem;
    z-index: 100;
    .stick_out {
      width: 60vw;
      min-height: 78vh;
      margin: 0 auto;
      margin-top: 10vh;
      padding: 2rem;
      box-sizing: border-box;
      border-radius: 1rem;
    }
  }
 } 
}
@media screen and (max-width: 1100px) {
 #menu {
  .left_menu {
   ::v-deep .content {
      padding-top: 4rem;
    }
  }
  .content {
    background: #fff;
    width: 100%;
    padding: 1.5rem 1rem;
    box-sizing: border-box;
    min-height: 70vh;
    // margin-left: 22% !important;
  }
 }
}
</style>