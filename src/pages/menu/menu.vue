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
 #menu {
  display: flex;
  .left_menu {
    width: 16rem;
    min-width: 16rem;
    height: 100vh;
    position: fixed;
    overflow: hidden;
  }
  .content {
    width: 100%;
    margin-left: 16rem;
  }
 }
</style>