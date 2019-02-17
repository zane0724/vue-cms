<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <swiper :banners="banners" ></swiper>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="@/assets/images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img src="@/assets/images/menu2.png">          
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="@/assets/images/menu3.png">          
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="@/assets/images/menu4.png">          
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="ve=videoList">
          <img src="@/assets/images/menu5.png">          
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="contactUs">
          <img src="@/assets/images/menu6.png">          
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from '@/components/swiper'

export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$http.get("getlunbo").then(result => {
        // console.log(result);
        this.banners = result.body.message;
      });
    }
  },
  components:{
      swiper
  }

};
</script>
<style lang="less">
.home-container {
  .mui-table-view{
    background-color: #fafafa;
    img{
      width: 80%;
      height: 100%;
    }
  }
  // .mint-swipe {
  //   height: 200px;
  //   .mint-swipe-item {
  //     img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  // }
}
</style>
