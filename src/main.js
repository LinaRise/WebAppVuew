import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt,faInfo,faLink,faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
library.add(faInstagram,faLink,faMobileAlt,faInfo,faFileDownload,faGooglePlay)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
