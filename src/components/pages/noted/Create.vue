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
        <div class="content">
          <div class="columns">
            <div class="column is-6">
              <h3 class="title">Catatan</h3>
              <h4 class="subtitle">Form Input</h4>
    	        <div class="field">
                <p class="control">
                  <input class="input is-hovered" type="text" v-model="note.title" placeholder="Judul">
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <span class="select">
                    <select v-model="note.level">
                      <option v-for="level in levels">{{level}}</option>
                    </select>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <textarea class="textarea is-hovered" v-model="note.content" placeholder="Isi Catatan?"></textarea>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <input class="input is-hovered" v-model="note.tanggal" type="hidden">
                </p>
              </div>
              <div class="field is-grouped">
                <a class="button is-primary is-outlined" v-on:click.prevent="simpan_note">Simpan</a>
                <p class="control">
                  <router-link class="button is-link" to="/noted" exact>Batal</router-link>
                </p>
              </div>
            </div>
            <div class="column is-6">
              <h3 class="title has-text-right">Catatan</h3>
              <h4 class="subtitle has-text-right">Review Form Input</h4>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{note.title}}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <p class="has-text-centered">{{note.content}}</p>
                    <br>
                    <small class="has-text-left">{{note.tanggal}}</small>
                    <p class="has-text-right"><strong>{{note.level}}</strong></p>
                  </div>
                </div>
              </div>
              <div v-if="submitted" class="notification is-success">
                <button class="delete"></button>
                <strong>Data Berhasil Disimpan!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


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
     var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
     return {
      note: {
        level: '',
        title: '',
        content: '',
        tanggal: utc
      },
      levels: [
        'Easy',
        'Medium',
        'High',
        'Very High',
      ],
      submitted: false
     }
   },  
  methods: {
    simpan_note: function(){
      this.$http.post('https://jkvuefire.firebaseio.com/noted.json', this.note).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
};
</script>

<style>

</style>
