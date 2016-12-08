<template>
  <div class="view-wrapper">
      <router-view class="view"></router-view>
  </div>

</template>

<script>


export default {
  data () {
    return {
      transitionName:'slide-left'
    }
  },
}

</script>

<style lang="sass">
  .view-wrapper{
    width:750px;
    overflow: hidden;
  }
    a {
      color: #000000;
      text-decoration: none;
    }
    .mint-header{
      -webkit-box-align: center;
      align-items: center;
      background-color: #fff;
      color:#000;
      display: -webkit-box;
      display: box;
      display: flex;
      font-size: 36px;/*px*/
      height: 86px;
      line-height: 1;
      padding: 0 20px;
      position: relative;
      text-align: center;
      white-space: nowrap;
    }
    .mint-header-button{
      flex: .5;
      -webkit-box-flex: .5;
      
    }
    .mint-header-button.is-left{
      text-align: left;
    }
    .mint-button{
      -webkit-appearance: none;
      appearance: none;
      border-radius: 4px;
      border: 0;
      box-sizing: border-box;
      color:inherit;
      display: block;
      font-size: 36px;
      height:80px;
      outline: 0;
      overflow: hidden;
      position: relative;
      text-align: center;
    }
    .mint-header .mint-button{
      background-color: transparent;
      border: 0;
      box-shadow: none;
      color:inherit;
      display: inline-block;
      padding: 0;
      font-size: inherit;
    }
    .mint-button-icon{
      vertical-align: middle;
      display:  inline-block;
    }
    .mintui{
      font-family: "mintui" !important;
      font-size: 36px;
      font-style: normal;
      -webkit-text-stroke-width : 0.2px; 
    }
    .mint-back:before{
      content: "\E600";
    }
</style>
