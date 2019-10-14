import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import vtable from './components/vtable'



Vue.use(vueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/Test_Task_vLibrary/', component: vtable}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


