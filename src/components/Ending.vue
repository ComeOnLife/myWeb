<template>
  <div class="ending">
    <div class="tag">
      <template v-for="(item , index) in images" :key="index">
        <el-tooltip class="box-item" effect="dark" :content="item.content" placement="top-start">
          <img :src="item.image" alt="" width="28" height="28" @click="toUrl(index)">
        </el-tooltip>
      </template>
    </div>

    <div style="color: #878787;text-align: center;">
      © 2023 Mo Qiang's Blog,Powered By 
      <a href="https://imzbf.github.io/md-editor-v3/en-US/index" target="_blank">Md-Editor-V3</a>
      <a href="https://beian.miit.gov.cn" target="_blank" style="color: #878787;font-size: 14px;">&nbsp;&nbsp;&nbsp;湘ICP备2023013556号-1</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElTooltip} from "element-plus"

import github from '@/assets/images/github.svg'
import twitter from "@/assets/images/twitter.svg"
import bilibili from "@/assets/images/bilibili.svg"
import weibo from "@/assets/images/weibo.svg"
import gitee from "@/assets/images/gitee.svg"

interface Tag {
  content: string,
  image:string,
  url: string
}

const images: Tag[] = [
  {
    content: 'Github: ComeOnLife',
    image: github,
    url: "https://github.com/ComeOnLife"
  },
  {
    content: 'Gitee: XiaoQiang',
    image: gitee,
    url: "https://gitee.com/mo1834508623"
  },
  {
    content: 'Twitter: exaltedQIANG',
    image: twitter,
    url: "https://twitter.com/exaltedQIANG"
  },
  {
    content: 'Bilibili: XiangSi',
    image: bilibili,
    url: "https://space.bilibili.com/438425529"
  },
  {
    content: 'Weibo: XiangSi',
    image: weibo,
    url: "https://weibo.com/u/6363401109"
  },
]

const toUrl = (index:number):void => {
  window.open(images[index].url, '_blank')
}

</script>

<style scoped lang="scss">
.ending {
  // width: 60vw;
  height: 5rem;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #3C4858;
  .tag {
    line-height: 2rem;
    img {
      margin: 0 0.7rem;
      cursor: pointer;
    }
  }
  a {
    color: #4ea7fa;
  }
  a:hover {
    color: #1289F8;
  }
}
@media screen and (max-width: 1100px) {

}
</style>