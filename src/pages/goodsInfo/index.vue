<template>
  <div class="goodsInfo-container">
    <!-- 过渡切换的类名,如果使用一二没有名字的<transition> 则V-是这些类名默认的前缀,多处动画时需写入name,否则会产生动画冲突 -->
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
          <div class="ball" ref="ball" v-show="ballFlag"></div>
      </transition>
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
            <button type="button" class="mui-btn mui-btn-danger" @click="addToShopCar">加入购物车</button>
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
      ballFlag:false,
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
    },
    addToShopCar(){
        this.ballFlag=!this.ballFlag
        
    },
    beforeEnter(el){
        el.style.transform="translate(0,0)"
    },
    enter(el,done){
      //小球的位置通过$refs获取dom元素
        const ballPosition= this.$refs.ball.getBoundingClientRect();
        //购物车徽标位置
        const badgePosition=document.getElementById("badge").getBoundingClientRect();
        // 计算小球移动位置
        var Xdis = badgePosition.left - ballPosition.left
        var Ydis = badgePosition.top -ballPosition.top
        el.offsetHeight;
        el.style.transform=`translate(${Xdis}px,${Ydis}px)`;
        el.style.transition="all 1s ease";
        done();
    },
    afterEnter(el){
        this.ballFlag = !this.ballFlag;
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
    .ball{
        width: 18px;
        height: 18px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        z-index: 199;
        top: 360px;
        left: 155px;
    }
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



