<template>
  <div>
    <template v-for="item in items">
        <template v-if="item.type==1">
            <div class="award-item">
                <div class="award-header">
                    <span class="award-name">
                        {{item.awardName}}:
                    </span>
                    <span class="award">
                    {{item.award}}
                    </span>
                </div>
                    <div class="award-body">
                        <div class="award-desc">
                            <span class="award-title">收货地址:</span>{{item.tel}}
                        </div>
                        <p class="award-address">
                            {{item.address}}
                        </p>
                    </div>
            </div>
        </template>
        <template v-if="item.type==2">
            <div class="award-item">
                <div class="award-header">
                    <span class="award-name">
                        {{item.awardName}}:
                    </span>
                    <span class="award">
                    {{item.award}}
                    </span>
                </div>
                <div class="award-body">
                    <div class="award-desc">
                        <span class="award-title">充值号码:</span>{{item.tel}}
                    </div>
                    <div class="get-award">领取</div>
                </div>
            </div>
        </template>
    </template>
  </div>

</template>

<script>
import _ from 'lodash'
export default {
    name:"award-item",
    props:{
        items:{
            type:Array
        }
    },
    data() {
        return {
            data:''
        }
    },
    mounted () {
    },
}
</script>

<style lang="sass" scoped>
    p{
        color: #474747;
        font-size:28px;
        margin-bottom: 25px;
    }
    .award-item{
        background: #fff;
        border:1px solid #ddd;
        border-top: 6px solid #ffcb52;
        margin: 24px 0;
        .award-header{
            border-bottom:1px solid #ddd;
            padding:0 25px;
            line-height:92px;
            font-size:36px;/*px*/
            .award-name{
                color:#8e8e8e;
            }
        }
        .award-body{
            padding: 0 25px;
            .award-desc{
                height: 88px;
                line-height: 88px;
                font-size:30px;/*px*/
                .award-title{
                    margin-right: 30px;
                }
            }
        }
    }
    .get-award{
        display: block;
        width:210px;
        height: 55px;
        font-size: 28px;
        margin: 20px auto;
        line-height: 55px;
        text-align: center;
        box-sizing: border-box;
        color: #e8340c;        
        border: 1px solid #e8340c;
    }
</style>
