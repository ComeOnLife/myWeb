<template>
  <div id="about_me">
    <h1 class="title">关于我</h1>
    <div class="foreword">
      <p>这是我人生中第一次做一个只属于自己的博客</p>
      <p>作为一名程序员,要学的太多,想说的太多,所以很有必要记录一下,尤其是在自己的网站上,嘿嘿</p>
    </div>
    <div class="content">
      <div class="content_list">
        <div class="header"> 介绍一个我自己</div>
        <div class="content_show">
          <p>我是一名前端开发工程师,从事前端工作已经有三年了,目前在一家影院类公司从事前端工作</p>
          <p>My name is 莫强,目前24岁,公司人称小强,没办法每进一家公司总有一个同事叫强哥</p>
          <p>我是一名湖南人,老家在常德澧县,一个农村娃,当地最出名的特产就是津市牛肉粉,还有饽饽菜</p>

          <div class="header"> 我和前端的爱恨情仇</div>
          <p>我是一名半路出身的前端,不是计算机专业的,大学专业是环境设计(就是室内设计)</p>
          <p>我是在大三的时候偶然听到前端这个名词,当时我本来安安静静的实习, 结果一月500的工资击垮了我的梦,而且该行业不止996, 单休,干了一个月不干了</p>
          <p>然后想着学点别的谋另一条出路,正巧和我一个学计算机的朋友闲聊时,他就推荐了我学前端,说工资高什么的把我一顿忽悠</p>
          <p>想着光脚不怕穿鞋的,才大三,干就完了,然后经过我的自学(bilibili大学毕业),成功在我毕业时找到了一份前端开发的工作,成功入行</p>

          <div class="header"> 多走三十年弯路</div>
          <p>自学前端什么都需要自己去摸索,当时我朋友自己其实都对前端这个行业一知半解,毕竟现在大学什么都只教点皮毛</p>
          <p>自学前端,我首先学的C++,哪个前端能第一个学这个,但是我朋友就是说学这个,说是学点基础,后面JavaScript容易入门</p>
          <p>第二门白学,java,啧啧啧我都服了我自己,但是当时真啥都不懂没个方向</p>
          <p>还学了Jquery, 这个真过时了,现在找工作遇到Jquery的岗位我都是避之不及,说不定干着干着你自己就得过时了</p>

          <div class="header"> 我是个计算机Coder</div>
          <p>
            现在入职的这家公司主要做的是影院类的微信小程序,一个是公司自己影院自营的购票小程序(中影泰得),另一个就是电商模式的购票小程序(聚客电影),可以参考一个淘票票和猫眼
          </p>
          <p>从接触到前端以来,我是无时无刻都没有停止过学习,但是很多东西学过不用就忘了,比如以前学过的express、mongodb做后端,当时学过后就只搭了个简单增删改查</p>
          <p>现在这个博客前端是用的Vue3+TS, 后端用的springBoot+mysql+redis</p>
          <div class="header"> 我的微信公众号</div>
          <img src="@/assets/images/scan.jpg" alt="">
          <div class="header"> 联系我</div>
          <p>微信号: m_q520137</p>
          <p>qq号: 1834508623</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  #about_me {
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
        font-size: 0.7rem;
        a {
          color: #00688B;
        }
        ul {
          margin: 0 0 1.3em 2.5em;
        }
      }
    }
  }

</style>