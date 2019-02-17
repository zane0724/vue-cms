<template>
  <div goodsInfo-container>
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :banners="Banners"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">小米(M1)小米Note 16G双网通版</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="oldPrice">市场价:¥2699</span>
            <span class="nowPrice">销售价:¥2199</span>
          </p>
          <p class="number">
            <input type="button" value="-">
            <input type="text" value="1">
            <input type="button" value="+">
          </p>
          <p>
            <button type="button" class="mui-btn mui-btn-primary">默认</button>
            <button type="button" class="mui-btn mui-btn-danger">默认</button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="detail">
                <p>商品货号:SD295666655</p>
                <p>库存情况:60件</p>
                <p>上架时间:2019-123</p>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入轮播图组件
import swiper from "@/components/swiper";
export default {
  data() {
    return {
        id:this.$route.params.id,
        Banners:[]
    };
  },
  created(){
      this.getBanners()
  },
  methods: {
      getBanners(){
          this.$http.get('getthumimages/'+ this.id).then(result=>{
              console.log(result.body)
            // result.body.message.forEach(item => {
            //     item.img = item.src;
            // });
              this.Banners=result.body.message;
          })

      }
  },
  components: {
    swiper
  }
};
</script>

<style lang="less" scoped>
</style>

