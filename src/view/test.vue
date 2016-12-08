<template>
  <div>
    <footer class="vote-sponsor" v-touch:tap="toggleShow">
        <img src="http://img.benditoutiao.com/handwork_20161122/e2978da0-b064-11e6-98d8-717e44dd841c.png@!titleSponser" alt="">
        <span>感谢本地头条对本次活动的大力支持</span>
    </footer>
    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
    >
        <div class="modal" id="modal-sponsor" v-show="show">
            <div class="modal-container">
                <div class="modal-wrap">
                    <i data-dismiss="modal" class="modal-close"></i>
                    <div class="modal-content">
                    assssssssssss
                    </div>
                    <div class="modal-action">
                        <a href="javascript:;">我知道了</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
  </div>

</template>

<script>
export default {
    
  data() {
    return {
      show:false,
    }
  },
  components: {
  },
  mounted () {
  },
  watch:{
  },
  methods: {
      toggleShow () {
          var self = this;
          self.show = !self.show;
          if(self.show){

          }
      },
    //   showSponsor () {
    //       console.log("11");
    //       $("button").on("click", function (e) {
    //         $("#modal-sponsor").addClass("active");
    //         setTimeout(function () {
    //             $("#modal-sponsor").addClass("transition");
    //         }, 50);
    //         $("#modal-sponsor").on("click", ".modal-close", function (e) {
    //             $("#modal-sponsor").removeClass("active transition");
    //             $(this).off("click");
    //         })
    //         $("#modal-sponsor").on("click", ".modal-action", function (e) {
    //             $("#modal-sponsor").removeClass("active transition");
    //             $(this).off("click");
    //         })
    //     })
    //   },
    beforeEnter: function (el) {
    //   el.style.opacity = 0
        // el.style.display = "block";
        setTimeout(function(){
            el.classList.add("transition");
        },200);
    },
    enter: function (el, done) {
    //   Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
    //   Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
}
</script>

<style lang = "sass">
    button{
        font-size:30px;
    }
    footer.vote-sponsor {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 750px;
    height: 100px;
    overflow: hidden;
    line-height: 100px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 32px;
    /*px*/
    text-align: center;
    z-index: 23;
    img {
        width: 140px;
        max-height: 85px;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translate(0, -50%)
    }
    span {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 180px;
        right: 20px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.modal {
    display: block;
    z-index: 150;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    &.active{
        display: block;
    }
    .modal-container {
        opacity: 0;
        transition: opacity .3s ease-out;
        height: 3000px;
        max-height: 3000px;
        padding: 200px 0;
        box-sizing: border-box;
        background: rgba(0,0,0,.6);
    }
    &.transition .modal-container {
        opacity: 1;
    }
    .modal-wrap {
        width: 575px;
        background: #fff;
        opacity: 0;
        transform: translateY(100%);
        transition: opacity .25s ease-out .05s,transform .25s cubic-bezier(0,0,0,1) .05s;
        position: relative;
        margin: 0 auto;
        border:4px solid transparent; /*px*/        
        border-radius: 10px ;

    }
    &.transition .modal-wrap {
        opacity: 1;
        transform: translateY(0);
    }
    &-close{
        position: absolute;
        right: -73px;
        top: -73px;
        width: 55px;
        height: 55px;
        border: 50px solid transparent;
        // padding: 50px;
        background: url(http://benditoutiao.oss-cn-hangzhou.aliyuncs.com/fore-end/app/vote-img/model_close1.png) no-repeat center center;
        border-radius: 50%;
        background-size: cover;
        // border: 2px solid #fcb216;/*no*/
        // background-size: 100% 100%;
    }
    &-invite-logo{
        position: absolute;;
        width: 340px;
        height: 87px;
        top: -50px;
        left: 120px;
        background: url(http://benditoutiao.oss-cn-hangzhou.aliyuncs.com/fore-end/app/vote-img/model_3.png) no-repeat center center;
        background-size: 100% 100%;
    }
    &-activity-logo{
        position: absolute;;
        width: 340px;
        height: 87px;
        top: -50px;
        left: 120px;
        background: url(http://benditoutiao.oss-cn-hangzhou.aliyuncs.com/fore-end/app/vote-img/model_1.png) no-repeat center center;
        background-size: 100% 100%;
        
    }
    &-vote-logo{
        position: absolute;;
        width: 340px;
        height: 87px;
        top: -50px;
        left: 120px;
        background: url(http://benditoutiao.oss-cn-hangzhou.aliyuncs.com/fore-end/app/vote-img/model_2.png) no-repeat center center;
        background-size: 100% 100%;
    }
    &-content{
        padding: 0 35px;
        font-size: 28px;/*px*/
        word-break: break-all;
        color: #333;
        margin: 90px 30px 20px;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 300px;
        max-height: 500px;
        p{
            width: 448px;
            margin: 0 auto;
        }
        *{
            font-size: 32px!important;/*px*/
        }
    }
    &-action{
        padding: 24px;
        a{
            display: block;
            width: 500px;
            height: 80px;
            margin: 0 auto;
            color: #fff;
            font-size: 32px;/*px*/
            line-height: 80px;
            text-align: center;
            border-radius: 4px;/*no*/
            background-color: #dd675a;
        }
    }
}
</style>
