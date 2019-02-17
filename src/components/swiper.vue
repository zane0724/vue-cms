<template>
    <div>
      <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.url">
          <!-- 所抽取的公用组件中有些图片的地址不一,可以通过或 || 选择符来获取可以取消循环来更改地址 -->
          <img :src="item.img || item.src" :class="{fullScreen:fullScreen}">
        </a>
      </mt-swipe-item>
      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
    </div> 
</template>

<script>
export default {  
  props: ["banners","fullScreen"]
}
</script>

<style lang="less">
    .mint-swipe {
      height: 200px;
    .mint-swipe-item {
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .fullScreen{
    width: 100%;
  }
</style>
