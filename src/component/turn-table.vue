<template>
  <div class="lottery">    
    <div class="lottery-container">
        <img class="bg-img" src="http://kano.guahao.cn/Pik3712488?token=bmFjRng2Ykh6WGdJRVRDek1ZQjFDdz09X1RJTUVfQUVTCOUSTOM" alt="">
        <img class="twinkle-img" :src="twinkleImg" alt="">
        <img class="btn-img" v-on:click="clickMe" src="http://kano.guahao.cn/G4P3712922?token=bHRLcWdtLzBXaWxFWXpRc0tPOUtQUT09X1RJTUVfQUVTCOUSTOM">
    </div>
  </div>

</template>

<script>
import $ from 'expose?$!jquery';
// import '../asset/jQueryRotate.js';
export default {
    name:"turn-table",
    props:{
        // 背景图
        bgImg:{
            type:Object
        },
        // 按钮图
        btnImg:{
            type:Object
        },
        // 闪烁图
        twinkleImg:{
            type:String,
            default:"http://kano.guahao.cn/ojx3712503?token=ZmhCZmpLUHMyWUJkUkJPNDhaMG10dz09X1RJTUVfQUVTCOUSTOM"
        },
    },
    data() {
        return {
            data:'',
            // 转盘现在是否在转动
            isRunning:false,
        }
    },
     methods: {
        clickMe () {
            var self = this;
            if (self.isRunning){
                return;
            }
            self.isRunning = true;
            $(".bg-img").rotate({
                angle:0,
                animateTo:1800,
                duration:6000,
                callback: function(){
                    console.log("done");
                    self.isRunning = false;
                }
            });
        }
    },
    mounted () {
    }
}
</script>

<style lang="sass" scoped>
    @-webkit-keyframes autorotate {
        0% {
            -webkit-transform: rotateZ(0);
        }
        100% {
            -webkit-transform: rotateZ(-360deg);
        }
    }
    @keyframes autorotate {
        0% {
            -webkit-transform: rotateZ(0);
        }
        100% {
            -webkit-transform: rotateZ(-360deg);
        }
    }
   .lottery-container {
        position: relative;
        margin: 10px auto;
        width: 320px;
        height: 320px;
        .twinkle-img {
            -webkit-animation: autorotate 12s steps(20, start) 0s infinite normal;
            animation: autorotate 12s steps(25, start) 0s infinite normal;
        }
        img {
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            width: 100%;
            height: 100%;
        }
    }
</style>
