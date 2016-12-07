import 'mint-ui/lib/style.css'
import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

import picker from './component/picker.vue';

Vue.component(picker.name, picker);

import awardItem from './component/award-item.vue'
Vue.component(awardItem.name, awardItem)

// mint-ui组件
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

Vue.use(VueRouter);
Vue.use(VueResource);

import baseUsage from './component/baseUsage.vue';
import date from './component/date.vue';
import city from './component/city.vue';
import award from './component/award.vue';
const router = new VueRouter({
  routes: [
    {
      path: '/baseUsage',
      component: baseUsage
    },
    {
      path: '/date',
      component: date
    },
    {
      path: '/city',
      component: city
    },
    {
      path: '/award',
      component: award
    }
  ]
})

const app = new Vue({
  router: router,
  render: render => render(App),
}).$mount('#app')
