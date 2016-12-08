<template>
  <div>
      <div class="lottery-wrapper" style="background:url('/src/asset/img/bg.png') no-repeat center center;background-size:cover">
        <turn-table ></turn-table>    
        <div class="lottery-times">
            你今天还有<span>1</span>次抽奖机会
        </div>
        <div class="lottery-btn"></div>
        <router-link to="/award" slot="left">
            <div class="lottery-award">
                查看我的奖励
            </div>
        </router-link>
      </div> 
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">获奖用户</mt-tab-item>
        <mt-tab-item id="2">活动规则</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <div class="auto-play">
                <ul>
                    <li style="display: block" v-for="n in 20">
                        <span class="award-user">用户132*****234</span>
                        获得<span class="award">"多少多少流量"</span>
                    </li>
                </ul>
            </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <div class="activity-rule">
                <mt-cell v-for="n in 100" :title="'测试 ' + n" />
            </div>
        </mt-tab-container-item>
    </mt-tab-container>
    <div class="sponsor-container">
        <sponsor-list></sponsor-list>
    </div>
  </div>

</template>

<script>
import _ from 'lodash'
import myScroll from '../asset/myScroll.js'
import turnTable from '../component/turn-table.vue'
export default {
  data() {
    return {
      selected:"1",
    }
  },
  components: {
      turnTable
  },
  mounted () {
      var a = new myScroll(".auto-play",{
          speed:20,
          rowHeight:69
      });
    //   $('div li:even').addClass('lieven');
    // $(".auto-play").myScroll({
    //     speed:40, //数值越大，速度越慢
    //     rowHeight:30 //li的高度
    // });
  },
  watch:{
    visible:function(){
      console.log(arguments);
    },

  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
    .lottery-wrapper{
        height: 956px;
        padding-top:378px;
        .lottery-times{
            height: 116px;
            line-height:116px;
            text-align: center;
            font-size: 36px;/*px*/           
            color: #000;
            span{
                margin:0 10px;
                color: #e8340c;
            }
        }
        .lottery-btn{
            margin: 0 auto; 
            width: 411px;
            height: 98px;
            background: url(/src/asset/img/button.png) no-repeat center center;
            background-size: cover;
        }
        .lottery-award {
            width: 400px;
            margin: 0 auto;
            color:#f04631;
            font-size: 28px;/*px*/
            line-height: 68px;
            text-align: center;
        }
    }
    .mint-navbar {
        background-color: #fff;
        display: -webkit-box;
        display: flex;
        text-align: center;
        border-bottom: 2px solid #f0f0f0;
    }
    .mint-navbar .mint-tab-item {
        padding: 25px 0;
        /*font-size: 36px;*/
    }
    .mint-tab-item {
        display: block;
        padding: 7px 0;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-decoration: none;
        color:#1092f1;
        background: #fff;
    }
    .mint-navbar .mint-tab-item.is-selected {
        color: #fff;
        background-color: #1092f1;
        /*margin-bottom: -3px;*/
    }
    .mint-tab-item-label {
        color: inherit;
        font-size: 30px;/*px*/
        line-height: 1;
    }
    .mint-tab-container {
        overflow: hidden;
        position: relative;
        padding-top: 40px;
        padding-bottom: 45px;
        height: 840px;
    }
    .mint-tab-container-wrap {
        display: -webkit-box;
        display: flex;
    }
    .mint-tab-container-item {
        flex-shrink: 0;
        width: 100%;
    }
    .auto-play{
        height:840px;
        overflow:hidden;
        li{
            height:68px;/*px*/
            line-height:68px;/*px*/
            margin:0 40px;
            color:#999999;
            font-size:28px;/*px*/
            border-bottom:1px solid #e5e5e5;
            .award-user{
                margin-right: 110px;
            }
            .award{
                color:#000;
            }
        }
    }
    .activity-rule{
        height: 840px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .sponsor-container{
        margin-top: 7px;
        margin-bottom: 100px;
    }
</style>
