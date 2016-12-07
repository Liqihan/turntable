<template>
  <div class="view-wrapper">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>

</template>

<script>

import baseUsage from './component/baseUsage.vue';

import date from './component/date.vue';

import city from './component/city.vue';

export default {
  data () {
    return {
      transitionName:'slide-left'
    }
  },
  components: { baseUsage, date, city}
}

</script>

<style lang="sass">

  .view-wrapper ul {

    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: space-between;

    a {
      color: #000000;
    }
  }

</style>
