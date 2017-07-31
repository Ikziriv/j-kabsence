import Vue from 'vue'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import moment from 'moment'

import App from './App.vue'
import Login from './components/auth/Login.vue'
import router from './router/index'
import {config} from './helpers/firebaseConfig'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.filter('tanggal', function(value) {
  if (value) {
    return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a')
  }
})

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/auth')
      }
     });
  },
  el: '#app',
  render: h => h(App)
})
