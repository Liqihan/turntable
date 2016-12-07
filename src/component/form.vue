<template>

  <div>
    <h1 @click="visible = true">{{prompt}}</h1>
    <p>{{text}}</p>
    <picker v-model="visible" :data-items="cityItems" @change="onCityValuesChange"></picker>
  </div>
    <mt-field label="收货人" placeholder="输入收货人姓名"></mt-field>
    <mt-field label="手机号码" placeholder="输入11位手机号码" type="tel"></mt-field>
    <mt-field label="选择地区" placeholder="选择地区"></mt-field>    
    <mt-field label="详细地址" placeholder="输入详细地址"></mt-field>
</template>

<script>
import _ from 'lodash'
export default {
  data() {

    return {
      visible: false,
      cityItems: [],
      text: '',
      prompt: 'Being loaded...',
      provinces: [], 
      lastProvince: {},
      citys: [],
      lastCity: {},
      regions: [],
      lastRegion: {}
    }
  },
  mounted () {
    let provinces = [], lastProvince,
        citys = [],lastCity,
        regions = [],lastRegion;

    this.$http.get('/src/component/all.json').then((result) => {
      var self = this;
      // let city = result.data.result.city;
      let country = result.data[0];
      this.prompt = 'open';
      self.provinces = _.map(country.children,function(value,key){
        return value;
      })
      console.log(self.provinces);
      lastProvince = self.provinces[0];
      self.lastProvince = self.provinces[0];
      self.citys = self.lastProvince.children;
      self.lastCity = self.citys[0];
      self.regions = self.lastCity.children;
      self.lastRegion = self.regions[0];
      this.cityItems = [{
        name:'text',
        width: '50%',
        values: self.provinces
      },{
        name: 'text',
        width: '25%',
        values: self.citys
      },{
        name: 'text',
        width: '25%',
        values: self.regions
      }];
    });

  },
  methods: {
    onCityValuesChange (result, pickerEl, reset) {
      console.log("begin");
      var self = this;
      let province = result[0], city = result[1],region = result[2];
      let thisProvince = province ? province : self.lastProvince,
          thisCity = city ? city : self.lastCity,
          thisRegion = region ? region : self.lastRegion;
      this.text = `${thisProvince.text}\/ ${thisCity.text}\/ ${thisRegion.text}`;
      if (self.lastProvince !== thisProvince) {
        console.log(1);
        self.lastProvince = thisProvince;
        self.citys = self.lastProvince.children;
        reset(2, self.citys);
        return;
      }
      if (self.lastCity !== thisCity) {
        console.log(2222);        
        self.lastCity = thisCity;
        self.regions = thisCity.children;
        console.log(self.regions);
        reset(3, self.regions);
      }
      if (self.lastRegion !== thisRegion ){
        self.lastRegion = thisRegion;
      }
    }
  }
}
</script>

<style></style>
