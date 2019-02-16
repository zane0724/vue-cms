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
    <mt-button type="danger" size="large" @click="loadMore">加载更多</mt-button>
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
            this.goodsList = this.goodsList.concat(result.body.message) //点击加载更多时调用上一页数据拼接新的数据
          })
      },
      loadMore(){
          this.pageIndex++   //翻页
          this.getGoodsList()
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
