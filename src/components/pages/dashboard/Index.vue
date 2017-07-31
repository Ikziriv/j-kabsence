<template>
<div class="container">
  <app-nav></app-nav>
  <br>
  <div class="content">
    <div class="columns">
      <div class="column is-one-quarter">
        <app-sidebar></app-sidebar>
      </div>
      <!-- Content -->
      <div class="column">
        <div class="notification" v-cloak>
          <button class="delete"></button>
          Success Signup with email : {{email}} <br>
          ID User : {{userId}}
        </div>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Followers</p>
              <p class="title">456K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        </nav>
        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Component
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Component
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="pagination is-centered">
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>
        </nav>
        <hr>
        <div class="content">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img :src="photo">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Barbara Middleton</strong>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                  <br>
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img :src="photo">
              </p>
            </figure>
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea class="textarea" placeholder="Add a comment..."></textarea>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button">Chat</button>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
  [v-cloak] {
    display: none;
  }
</style>

<script>
import Nav from '../../../components/pages/dashboard/partials/Nav.vue'
import Sidebar from '../../../components/pages/dashboard/partials/Sidebar.vue'
import firebase from 'firebase'

export default {
  components: {
    'app-nav': Nav,
    'app-sidebar': Sidebar
  },
 data(){
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
  }
};
</script>

<style>

</style>
