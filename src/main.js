import Vue from 'vue'
import App from './App.vue'
import layer from 'vue-layer'
import router from './router'
import store from './store'
// import * as Vue2Leaflet from 'vue2-leaflet' // VALID
import './assets/css/common.css'
import 'leaflet/dist/leaflet.css';
// Vue.prototype.$leaflet = Vue2Leaflet;
Vue.prototype.$layer = layer(Vue, {
  msgtime: 3,//目前只有一项，即msg方法的默认消失时间，单位：秒
})
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
const vm = new Vue({
  mounted() {
    // console.log(L)
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
