// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TableList from './components/TableList.vue';
import DatePicker from './components/DatePicker.vue';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('table-list', TableList);
Vue.component('date-picker', DatePicker);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
