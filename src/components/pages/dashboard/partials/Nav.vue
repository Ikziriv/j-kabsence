<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <img src="https://jadikapan.com/assets/img/logo/logo.png" alt="JADIKAPAN logo">
        </a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img :src="photo">
          </figure>
          {{name}}
        </a>
        <a class="nav-item is-tab" @click='logOut'>Log out</a>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
     return {
       photo: '',
       userId: '',
       name: '',
       email: '',
       user: {}
     }
  },
  created() {
     var vm = this
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         vm.user = user;
         vm.name = vm.user.displayName;
         vm.email = vm.user.email;
         vm.photo = vm.user.photoURL;
         vm.userId = vm.user.uid;
      }
    });
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    }
  }
}
</script>

<style>

</style>
