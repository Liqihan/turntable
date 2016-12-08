<template>
  <div>
    <mt-header title="获得的奖励">
        <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">保存</mt-button>
    </mt-header>
    <div class="award-bg">
        <award-item :items="items"></award-item>
    </div>
  </div>

</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      visible: false,
      cityItems: [],
      text: '请选择',
      prompt: 'Being loaded...',
      provinces: [], 
      lastProvince: {},
      citys: [],
      lastCity: {},
      regions: [],
      lastRegion: {},
      items:[
                {
                    "type":1,
                    "name":"aasss",
                    "address":"浙江省爽肤水是对冯绍峰水淀粉水淀粉舒服",
                    "tel":"asdfsdfsdf",
                    "awardName":"三等奖",
                    "award":"小苹果一台"
                },
                {
                    "type":2,
                    "name":"aasss",
                    "address":"aassssssss",
                    "tel":"asdfsdfsdf",
                    "awardName":"阳光普照奖",
                    "award":"小苹果一台"
                },
                {
                    "type":1,
                    "name":"aasss",
                    "address":"aassssssss",
                    "tel":"asdfsdfsdf",
                    "awardName":"sdfsf",
                    "award":"小苹果一台"
                }
            ]
    }
  },
  mounted () {
  },
}
</script>

<style lang="sass" scoped>

    .award-bg{
        background: #f7f7f7;
        padding: 0 20px;
    }
</style>
