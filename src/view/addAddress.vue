<template>
  <div>
  <!--<mt-header title="收货地址">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button slot="right">保存</mt-button>
  </mt-header>-->
    <picker v-model="visible" :data-items="cityItems" @change="onCityValuesChange"></picker>
    <form>
      <div class="field">
        <div class="field-wrapper">
          <div class="field-title">收货人</div>
          <div class="field-value">
            <input type="" name="" value="" placeholder="输入收货人姓名">
          </div>
        </div>
      </div>
      <div class="field">
        <div class="field-wrapper">
          <div class="field-title">手机号码</div>
          <div class="field-value">
            <input type="" name="" value="" placeholder="输入11位手机号码" type="tel">
          </div>
        </div>
      </div>
      <div class="field">
        <div class="field-wrapper">
          <div class="field-title">选择地区</div>
          <div class="field-value">
            <!--<input type="" name="" value="" placeholder="输入收货人姓名" readonly>-->
              <div class="input-address" v-on:click="visible=true">
                {{text}}
              </div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="field-wrapper">
          <div class="field-title">详细地址</div>
          <div class="field-value">
            <input type="" name="" value="" placeholder="输入详细地址">
          </div>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import picker from '../component/picker.vue';

export default {
  data() {
    return {
      visible: false,
      cityItems: [],
      text: '选择地区',
      provinces: [], 
      lastProvince: {},
      citys: [],
      lastCity: {},
      regions: [],
      lastRegion: {}
    }
  },
  components: {
    picker
  },
  mounted () {
    let self = this;

    let provinces = [], lastProvince,
        citys = [],lastCity,
        regions = [],lastRegion;

    this.$http.get('/src/asset/region.json').then((result) => {
      var self = this;
      // let city = result.data.result.city;
      let country = result.data.data;
      self.provinces = country;
      lastProvince = self.provinces[0];
      self.lastProvince = self.provinces[0];
      self.citys = self.lastProvince.children;
      self.lastCity = self.citys[0];
      self.regions = self.lastCity.children;
      self.lastRegion = self.regions[0];
      this.cityItems = [{
        name:'label',
        width: '33%',
        values: self.provinces
      },{
        name: 'label',
        width: '33%',
        values: self.citys
      },{
        name: 'label',
        width: '33%',
        values: self.regions
      }];
    });

  },
  watch:{
  },
  methods: {
    formCheck () {

    },
    onCityValuesChange (result, pickerEl, reset) {
      var self = this;
      let province = result[0], city = result[1],region = result[2];
      let thisProvince = province ? province : self.lastProvince,
          thisCity = city ? city : self.lastCity,
          thisRegion = region ? region : self.lastRegion;
      this.text = `${thisProvince.label}\/ ${thisCity.label}\/ ${thisRegion.label}`;
      if (self.lastProvince !== thisProvince) {
        self.lastProvince = thisProvince;
        self.citys = self.lastProvince.children;
        reset(2, self.citys);
        return;
      }
      if (self.lastCity !== thisCity) {
        self.lastCity = thisCity;
        self.regions = thisCity.children;
        reset(3, self.regions);
      }
      if (self.lastRegion !== thisRegion ){
        self.lastRegion = thisRegion;
      }
    }
  }
}
</script>

<style lang="sass" scoped>


.field{
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 109px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}
.field-wrapper{
  display: flex;
  font-size: 32px;/*px*/
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  line-height: 1;
  min-height: inherit;
  overflow: hidden;
  padding: 0 24px;
  width: 100%;
  .field-title{
    width: 164px;
    -webkit-box-flex: 0;
    flex:none;
  }
  .field-value{
    flex: 1;
    -webkit-box-flex: 1;
    display: flex;
    height: 107px;
    align-items: center;
    color:#ccc;
    border-bottom: 1px solid #e0e0e0;
  }
}
.input-address{
  flex:1;
  -webkit-box-flex: 1;
  line-height: 1.6;
}
input,textarea{
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
  border: 0;
  -webkit-box-flex: 1;
  flex: 1;
  outline:0;
  line-height: 1.6;
  color:#ccc;
  font-size: inherit;
  width: 100%; 
}
input::-webkit-input-placeholder{
  color:#ccc;
}
input::-moz-placeholder{
  color:#ccc;
}
input:-moz-placeholder{
  color:#ccc;
}
input:-ms-input-placeholder{
  color:#ccc;
}
  .mint-field-core{
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 0;
    -webkit-box-flex: 1;
    flex: 1;
    outline: 0;
    line-height: 1.6;
    font-size: inherit;
    width: 100%; 
  }
  .mint-cell-wrapper{
    font-size: 32px;
  }
  .mint-field .mint-cell-title{
    width: 210px;
    -webkit-box-flex: 0;
    flex: none;
  }
</style>
