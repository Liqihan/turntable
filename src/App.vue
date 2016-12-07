<template>
  <div class="view-wrapper">

    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
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

  // .view-wrapper ul {
  //   padding: 0;
  //   display: flex;
  //   list-style-type: none;
  //   justify-content: space-between;

    a {
      color: #000000;
    }
  // }

</style>
