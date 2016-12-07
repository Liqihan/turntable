<template>
  <div>
    <mt-header title="获得的奖励">
        <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">保存</mt-button>
    </mt-header>
    <award-item :items="items"></award-item>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      baseItems: [{
        values: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007']
      }, {
        values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      }],
      slotItems: [{
        values: ['top', 'bottom']
      }],
      widthItems: [{
        width: '70%',
        values: ['2008', '2009', '2010']
      },{
        width: '30%',
        values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      }]
    }
  },
  mounted: function() {

  },
  methods: {

    onBaseValuesChange (result) {

      console.log(result);
    }
  }
}
</script>

<style></style>
