// import 'mint-ui/lib/style.css'
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueResource from 'vue-resource';
import router from './router';
import VueTouch from 'vue-touch';

// var $ = require("jquery");
// 自己写的组件
import awardItem from './component/award-item.vue'
Vue.component(awardItem.name, awardItem)

import sponsorList from './component/sponsor-list.vue'
Vue.component(sponsorList.name, sponsorList)

// mint-ui组件
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.use(VueResource);
Vue.use(VueTouch);


const app = new Vue({
  router: router,
  store:store,
  render: render => render(App),
}).$mount('#app')
