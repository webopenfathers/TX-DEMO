import Vue from 'vue';
import App from './App.vue';
import { printPdf } from '@/utils/Utils';
Vue.config.productionTip = false;

// 导出pdf功能
Vue.prototype.getPdf = printPdf;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
