import 'mint-ui/lib/style.css'
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './router'
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

Vue.use(VueResource);


const app = new Vue({
  router: router,
  render: render => render(App),
}).$mount('#app')
