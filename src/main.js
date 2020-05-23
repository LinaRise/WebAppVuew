import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from '@/router/router'
// импорт fontawesome и нужных иконок
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt,faInfo,faLink,faFileDownload,faUser,faEnvelope,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
library.add(faInstagram,faLink,faMobileAlt,faInfo,faFileDownload,faGooglePlay,faUser,faEnvelope,faExclamationTriangle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
