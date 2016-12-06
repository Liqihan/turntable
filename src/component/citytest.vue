<template>

  <div>
    <h1 @click="visible = true">{{prompt}}</h1>
    <p>{{text}}</p>
    <picker v-model="visible" :data-items="cityItems" @change="onCityValuesChange"></picker>
  </div>

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
      lastProvince: "",
      citys: [],
      lastCity: "",
      regions: [],
      lastRegion: ""
    }
  },
  mounted () {
    var self = this;
    this.$http.get('/src/component/all.json').then((result) => {
      let country = result.data[0];
      this.prompt = 'open';
      self.provinces = _.map(country.children,function(value,key){
        return value;
      })
      console.log(self.provinces);
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
      console.log("ssssssss");
      // if (lastProvince !== thisProvince) {

      //   lastProvince = thisProvince;
      //   reset(2, citys[lastProvince]);
      // }
    }
  }
}
</script>

<style></style>
