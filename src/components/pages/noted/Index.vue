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
	        <div class="field has-addons">
			  <p class="control">
			  	<router-link to="/noted/create" class="button" exact>
			      <span class="icon is-small">
			        <i class="fa fa-plus"></i>
			      </span>
			      <span>Create</span>
			  	</router-link>
			  </p>
			</div>
			<div class="field">
			  <p class="control has-icons-right">
			    <input class="input" type="text" v-model="search" placeholder="Search">
			    <span class="icon is-small is-right">
			      <i class="fa fa-search"></i>
			    </span>
			  </p>
			</div>
	        <table class="table">
			  <thead>
			    <tr>
			      <th>Judul</th>
			      <th><abbr title="Played">Isi</abbr></th>
			      <th style="width: 3.5em;">Tanggal</th>
			    </tr>
			  </thead>
			  <tfoot>
			    <tr>
			      <th>Judul</th>
			      <th><abbr title="Played">Isi</abbr></th>
			      <th style="width: 3.5em;">Tanggal</th>
			    </tr>
			  </tfoot>
			  <tbody>
			    <tr v-for="note in filterNote">
			      <td>{{note.title}}</td>
			      <td>{{note.content}}</td>
			      <td>{{note.tanggal}}</td>
			    </tr>
			  </tbody>
			</table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import Noted from '../../../mixins/Noted';
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
      notes: [],
      search: ''
     }
   },
  created(){
    this.$http.get('https://jkvuefire.firebaseio.com/noted.json')
    .then(function(data){
      return data.json();
    }).then(function(data){
      var noteArray = [];
      for(let key in data) {
        data[key].id = key
        noteArray.push(data[key]);
      }
      this.notes = noteArray;
    });
  },
  mixins: [Noted]
};
</script>

<style>

</style>
