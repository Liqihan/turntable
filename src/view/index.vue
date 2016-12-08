<template>
  <div> 
    <turn-table ></turn-table>
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <div class="auto-play">
                <ul>
                    <li style="display: block" v-for="n in 20">
                        {{n}}
                    </li>
                </ul>
            </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
    </mt-tab-container>
    <sponsor-list></sponsor-list>
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
          speed:40,
          rowHeight:30
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
      autoPlay () {
        $('div li:even').addClass('lieven');
        $("#auto-play").myScroll({
            speed:40, //数值越大，速度越慢
            rowHeight:30 //li的高度
        });
      }
  }
}
</script>

<style lang="sass">
    .auto-play{
        height:200px;
        overflow:hidden;
        li{
            height:30px;
        }
    }
</style>
