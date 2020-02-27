import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import 'intersection-observer';
import store from './store';
import '@/directives/loadMore';

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');