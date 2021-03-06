import App from './App.vue'
import router from './router'
import store from '../../store'
import '../../../my-theme/index.less';//覆盖的样式
import '@/assets/css/base.less';
import '@/assets/css/common.less';
import ChartG2 from 'vuechartg2' 
Vue.use(ChartG2)
Vue.prototype.$Message = iview.Message
Vue.prototype.$Notice = iview.Notice


if (process.env.NODE_ENV == 'development') {
  Vue.config.devtools = true;
} else {
  Vue.config.devtools = false;
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
