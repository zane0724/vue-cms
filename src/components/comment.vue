<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容(最多120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp; 用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content ==='undefined' ? '来了说话':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: "" //输入评论的内容
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          // console.log(result)
          this.comments = this.comments.concat(result.body.message);
        });
    },
    loadMore() {
      //加载更多
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      //发表评论
      //校验评论内容非空
      if (this.msg.trim().length === 0) return Toast("评论内容不能为空");
      this.$http
        .post("postcomment/" + this.id, { content: this.msg.trim() })
        .then(result => {
          // console.log(result.body)
          Toast(result.body.message);
          //第一种方式通过手动拼接一个对象,并显示在最新评论位置
          // this.comments.unshift({
          //     user_name:"匿名用户",
          //     add_time:Date.now(),
          //     content:this.msg,
          // })
          // this.msg=""
          // 第二种方式重新调用getcomments
          this.comments=[]      //清空原有的数据
          this.pageIndex=1      //回到第一页显示
          this.getComments();  //再次调用 加载内容
          this.msg=""       //清空评论
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="less">
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
}
</style>

