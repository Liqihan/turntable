import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import baseUsage from '../component/baseUsage.vue';
import date from '../component/date.vue';
import city from '../component/city.vue';
import award from '../component/award.vue';

export default new Router({
//   mode: 'history',
  routes: [
    {
        path: '/',
        // redirect: '/baseUsage'
        component: award
    },
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
