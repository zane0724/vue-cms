<template>
  <div class="goodsInfo-container">
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <swiper :banners="Banners"></swiper>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header"> {{goodsDetail.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>¥ {{goodsDetail.market_price}}</del> &nbsp;&nbsp;销售价:
            <span class="nowPrice">¥{{goodsDetail.sell_price}}</span>
          </p>
          <p class="number">购买数量:
              <number></number>
            <!-- <input type="button" value="-" >
            <input type="text" v-model="buycount">
            <input type="button" value="+"> -->
          </p>
          <p class="btn">
            <button type="button" class="mui-btn mui-btn-primary">立即购买</button>
            <button type="button" class="mui-btn mui-btn-danger">加入购物车</button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>商品货号:{{goodsDetail.goods_no}}</p>
            <p>库存情况:{{goodsDetail.stock_quantity}}件</p>
            <p>上架时间:{{goodsDetail.add_time | dateFormat}}</p>
        </div>
        <div class="mui-card-footer">
            <mt-button type="primary" size="large" plain @click="getGoodsDesc(id)">图文介绍</mt-button>
            <mt-button type="danger" size="large" plain @click="getGoodsComm(id)">商品评论</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入轮播图组件
import swiper from "@/components/swiper";
//导入购物车加减组件
import number from "@/components/goodsInfoNumber";
export default {
  data() {
    return {
      id: this.$route.params.id,
      Banners: [],
      goodsDetail:{},
    };
  },
  created() {
    this.getBanners()
    this.getGoodsDetail()
  },
  methods: {
    getBanners() { //获取轮播图
      this.$http.get("getthumimages/" + this.id).then(result => {
        // console.log(result.body);
        // result.body.message.forEach(item => {
        //     item.img = item.src;
        // });
        this.Banners = result.body.message;
      });
    },
    getGoodsDetail(){
        this.$http.get("goods/getinfo/" + this.id).then(result=>{
            // console.log(result.body)
            this.goodsDetail=result.body.message[0]
        })
    },
    getGoodsDesc(id){
        this.$router.push("/home/goodsDesc/" +id)
    },
    getGoodsComm(id){
        this.$router.push("/home/goodsComment/" +id)
    }
  },
  components: {
    swiper,
    number
  }
};
</script>

<style lang="less">
.goodsInfo-container {
  .price {
    .nowPrice {
      color: red;
      font-size: 16px;
      font-weight: bord;
    }
  }
  .number {
      margin: 8px;
    input {
      width: 35px;
      height: 35px;
    }
  }
  .mui-card-footer{
      display: block;
      button{
          margin: 15px 0;
      }
  }
}
</style>



