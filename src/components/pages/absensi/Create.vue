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
              <h3 class="title">Absensi</h3>
              <h4 class="subtitle">Form Input</h4>
              <div class="field">
                <p class="control">
                  <span class="select">
                    <select v-model="absensi.nama">
                      <option v-for="squad in squads">{{squad}}</option>
                    </select>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <span class="select">
                    <select v-model="absensi.posisi">
                      <option v-for="posisi in posisions">{{posisi}}</option>
                    </select>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <span class="select">
                    <select v-model="absensi.ket">
                      <option v-for="level in levels">{{level}}</option>
                    </select>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <input class="input is-hovered" v-model="absensi.tanggal" type="hidden">
                </p>
              </div>
              <div class="field is-grouped">
                <a class="button is-primary is-outlined" v-on:click.prevent="simpan_absensi">Simpan</a>
                <p class="control">
                  <router-link class="button is-link" to="/absensi" exact>Batal</router-link>
                </p>
              </div>
            </div>
            <div class="column is-6">
              <h3 class="title has-text-right">Absensi</h3>
              <h4 class="subtitle has-text-right">Review Form Input</h4>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td><strong>Nama</strong>
                          </td>
                          <td>:</td>
                          <td><p>{{absensi.nama}}</p></td>
                        </tr>
                        <tr>
                          <td><strong>Posisi</strong>
                          </td>
                          <td>:</td>
                          <td><p>{{absensi.posisi}}</p></td>
                        </tr>
                        <tr>
                          <td><strong>Keterangan</strong>
                          </td>
                          <td>:</td>
                          <td><p>{{absensi.ket}}</p></td>
                        </tr>
                      </tbody>
                    </table>
                    <br>
                    <small>{{absensi.tanggal}}</small>
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
      absensi: {
        nama: '',
        posisi: '',
        ket: '',
        tanggal: utc
      },
      squads: [
        'Agung Cahyo Erwanto',
        'Ahmad Iqbal',
        'Rizky Ivan',
        'Fikri Angga',
        'Ibnu Rahman',
        'Tsabit Albana',
        'Anjar Juni',
        'Joe Cahyo',
        'Raina Agi',
        'Andri',
      ],
      posisions: [
        'Programmer',
        'Designer',
        'Sekertaris',
        'CEO',
        'CCE',
        'IT Support',
      ],
      levels: [
        'Hadir',
        'Absen',
        'Sakit',
        'Izin',
      ],
      submitted: false
     }
   },  
  methods: {
    simpan_absensi: function(){
      this.$http.post('https://jkvuefire.firebaseio.com/absensi.json', this.absensi).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
};
</script>

<style>

</style>
