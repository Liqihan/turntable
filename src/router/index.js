import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import baseUsage from '../component/baseUsage.vue';
import date from '../component/date.vue';
import addAddress from '../view/addAddress.vue';
import award from '../view/award.vue';
import index from '../view/index.vue';
import test from '../view/test.vue';
import myAddress from '../view/myAddress.vue';

export default new Router({
	//   mode: 'history',
	routes: [{
        path: '/',
        component:index
	}, {
		path: '/award',
		// redirect: '/baseUsage'
		component: award
	}, {
		path: '/baseUsage',
		component: baseUsage
	}, {
		path: '/date',
		component: date
	}, {
		path: '/addAddress',
		component: addAddress
	}, {
		path: '/award',
		component: award
	}, {
		path: '/test',
		component: test
	}, {
		path: '/myAddress',
		component: myAddress
	}]
})