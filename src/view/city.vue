<template>
  <div>
  <router-link to="/baseUsage">
    <button>哈哈哈哈</button>
  </router-link>
  <mt-header title="收货地址">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button slot="right">保存</mt-button>
  </mt-header>
    <picker v-model="visible" :data-items="cityItems" @change="onCityValuesChange"></picker>
    <mt-field label="收货人" placeholder="输入收货人姓名"></mt-field>
    <mt-field label="手机号码" placeholder="输入11位手机号码" type="tel"></mt-field>
    <mt-cell title="标题文字" v-on:click.native="visible = true" is-link>
      <span>{{text}}</span>
    </mt-cell>  
    <mt-field label="详细地址" placeholder="输入详细地址"></mt-field>
    <mt-field label="" placeholder="请输入详细地址" type="textarea" rows="4" :attr="{resize:none}"></mt-field>
  </div>

</template>

<script>
export default {
  data() {

    return {
      visible: false,
      cityItems: [],
      text: '请选择',
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
      lastProvince = self.provinces[0];
      self.lastProvince = self.provinces[0];
      self.citys = self.lastProvince.children;
      self.lastCity = self.citys[0];
      self.regions = self.lastCity.children;
      self.lastRegion = self.regions[0];
      this.cityItems = [{
        name:'text',
        width: '33%',
        values: self.provinces
      },{
        name: 'text',
        width: '33%',
        values: self.citys
      },{
        name: 'text',
        width: '33%',
        values: self.regions
      }];
    });

  },
  watch:{
    visible:function(){
      console.log(arguments);
    }
  },
  methods: {
    onCityValuesChange (result, pickerEl, reset) {
      var self = this;
      let province = result[0], city = result[1],region = result[2];
      let thisProvince = province ? province : self.lastProvince,
          thisCity = city ? city : self.lastCity,
          thisRegion = region ? region : self.lastRegion;
      this.text = `${thisProvince.text}\/ ${thisCity.text}\/ ${thisRegion.text}`;
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

<style></style>
