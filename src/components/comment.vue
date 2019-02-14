<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容(最多120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in comments" :key="index">
        <div class="cmt-title">
            第{{index+1}}楼&nbsp;&nbsp; 用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
            {{item.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pageIndex:1,
            comments:[]
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get("getcomments/" + this.id + "?pageindex=" +this.pageIndex)
            .then(result=>{
                console.log(result)
                this.comments=result.body.message
            })
        }
    },
    props:["id"]
};
</script>

<style lang="less">
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 30px;
                    text-indent: 2em;
                }
            }
        }

    }
</style>

