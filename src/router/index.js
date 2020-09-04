import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/list'
import Date from '@/views/date'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/date',
      name: 'Date',
      component: Date
    }
  ]
})
