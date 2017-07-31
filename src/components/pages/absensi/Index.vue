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
			  	<router-link to="/absensi/create" class="button" exact>
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
			      <th>Nama</th>
			      <th><abbr title="Played">Posisi</abbr></th>
			      <th><abbr title="Won">Keterangan</abbr></th>
			      <th style="width: 3.5em;">Tanggal</th>
			    </tr>
			  </thead>
			  <tfoot>
			    <tr>
			      <th>Nama</th>
			      <th><abbr title="Played">Posisi</abbr></th>
			      <th><abbr title="Won">Keterangan</abbr></th>
			      <th style="width: 3.5em;">Tanggal</th>
			    </tr>
			  </tfoot>
			  <tbody>
			    <tr v-for="absensi in filterAbsensi">
			      <td>{{absensi.nama}}</td>
			      <td>{{absensi.posisi}}</td>
			      <td>{{absensi.ket}}</td>
			      <td>{{absensi.tanggal}}</td>
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
import Absensi from '../../../mixins/Absensi';
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
      absensis: [],
      search: ''
     }
   },
  created(){
    this.$http.get('https://jkvuefire.firebaseio.com/absensi.json')
    .then(function(data){
      return data.json();
    }).then(function(data){
      var absensiArray = [];
      for(let key in data) {
        data[key].id = key
        absensiArray.push(data[key]);
      }
      this.absensis = absensiArray;
    });
  },
  mixins: [Absensi]
};
</script>

<style>

</style>
