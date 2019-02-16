<template>
  <div class="goodsList-container">
    <div class="goodsItem" v-for="(item, index) in goodsList" :key="index">
      <img :src="item.img_url">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="newPrice">¥{{item.sell_price}}</span>
          <span class="oldPrice">¥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <!-- <div class="goodsItem">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550326817613&di=67bbfde8e654a9f9685b341bf8eef998&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170702%2F5f63af27300c49e7a21b961b83096518_th.jpg"
      >
      <h1 class="title">华为手机国产第一</h1>
      <div class="info">
        <p class="price">
          <span class="newPrice">¥2195</span>
          <span class="oldPrice">¥2499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goodsItem">
      <img
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1009223177,3781080280&fm=26&gp=0.jpg"
      >
      <h1 class="title">华为手机国产第一</h1>
      <div class="info">
        <p class="price">
          <span class="newPrice">¥2195</span>
          <span class="oldPrice">¥2499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goodsItem">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1550311943&di=7dcb9246b2975fb304ab39b17a02b535&src=http://p.060s.com/2016/03/23/2bd1d49db699ccbeff960592447b486c.jpg"
      >
      <h1 class="title">华为手机国产第一和哈按时大大大叔大叔</h1>
      <div class="info">
        <p class="price">
          <span class="newPrice">¥2195</span>
          <span class="oldPrice">¥2499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goodsItem">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550325219062&di=ecd79503e91058493f6604a0621ed260&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F07%2F20141107164412_v284V.jpeg"
      >
      <h1 class="title">华为手机国产第一</h1>
      <div class="info">
        <p class="price">
          <span class="newPrice">¥2195</span>
          <span class="oldPrice">¥2499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        pageIndex:1,
        goodsList:[]
    };
  },
  created(){
      this.getGoodsList()
  },
  methods: {
      getGoodsList(){
          this.$http.get('getgoods?pageindex=' + this.pageIndex).then(result=>{
              console.log(result.body)
            this.goodsList =result.body.message
          })
      }
  }
};
</script>

<style lang="less">
.goodsList-container {
  display: flex;
  flex-wrap: wrap;
  padding:5px;
  justify-content: space-between;
 .goodsItem {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p{
          margin: 0;
          padding: 5px;
      }
        .price{
            display: flex;
            justify-content: space-between;
            .newPrice{
                font-size: 16px;
                font-weight: bold;
                color: red;
            }  
        }
        .sell{
            display: flex;
            justify-content: space-between;
             .oldPrice{
                font-size: 10px;
                text-decoration: line-through;
                margin-left: 4px;
            }
        }  
    }
  }
}
</style>
