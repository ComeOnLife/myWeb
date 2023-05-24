<template>
  <div id="menu">
    <div class="left_menu"><left-menu /></div>
    <div class="content"><router-view></router-view></div>
  </div>
</template>

<script setup lang="ts">
import leftMenu from "../../components/leftMenu.vue";
</script>

<style scoped lang="scss">
@media screen and (min-width: 1100px) {
  #menu {
  display: flex;
  .left_menu {
    width: 22%;
    max-width: 16rem;
    height: 100vh;
    position: fixed;
    overflow: hidden;
  }
  .content {
    width: 100%;
    margin-left: 30%;
    padding: 3rem 5rem 0 0;
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
  }
 }
}
</style>