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

</style>
