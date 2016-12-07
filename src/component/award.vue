<template>
  <div>
    <mt-header title="获得的奖励">
        <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">保存</mt-button>
    </mt-header>
    <award-item :items="items"></award-item>
    <p>hahah </p>
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
                    "address":"aassssssss",
                    "tel":"asdfsdfsdf",
                    "awardName":"sdfsf",
                    "award":"小苹果一台"
                },
                {
                    "type":2,
                    "name":"aasss",
                    "address":"aassssssss",
                    "tel":"asdfsdfsdf",
                    "awardName":"sdfsf",
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
    p{
        background-color:red;
        font-size:20px;
    }
</style>
