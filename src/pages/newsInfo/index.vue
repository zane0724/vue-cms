<template>
  <div class="newsinfo-container">
    <h1 class="title">{{newsInfo.title}}</h1>
    <p class="subtitle">
      <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
      <span>点击:{{newsInfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo.content"></div>
    <!-- 评论区 -->
    <!-- 父组件向子组件传值 -->
    <commentComponent :id="this.id"></commentComponent>
  </div>
</template>

<script>
//挂载评论子组件
import comment from '../../components/comment'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo:{}
    };
  },
  created() {
      this.getNewsInfo()
  },
  methods: {
      getNewsInfo(){
          this.$http.get('getnew/' + this.id).then(result=>{
              // console.log(result)
              this.newsInfo=result.body.message[0]
          })
      }
  },
  //注册子组件
  components:{
    commentComponent:comment
  }
};
</script>

<style lang="less">
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 18px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 14px;
            display: flex;
            justify-content: space-between;
        }
        .content{
          img{
             width: 100%
          }
        }
    }
</style>
