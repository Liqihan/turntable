<template>
  <div>
    <template v-for="item in items">
        <template v-if="item.type==1">
            <div class="award-item">
                <div class="award-header">
                    <span class="awrad-name">
                        {{item.awardName}}:
                    </span>
                    <span class="award">
                    {{item.award}}
                    </span>
                </div>
                <div class="award-body">
                    <div class="clearfix">
                        收货地址:{{item.address}}
                    </div>
                    <div class="tel">
                        {{item.tel}}
                    </div>
                </div>
            </div>
        </template>
        <template v-if="item.type==2">
            <div class="award-item">
                <div class="award-header">
                    <span class="awrad-name">
                        {{item.awardName}}:
                    </span>
                    <span class="award">
                    {{item.award}}
                    </span>
                </div>
                <div class="award-body">
                    <div class="clearfix">
                        充值号码:{{item.tel}}
                    </div>

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
        background-color:red;
        font-size:20px;
    }
    .award-item{
        border:1px solid #f0f0f0;
    }
</style>
