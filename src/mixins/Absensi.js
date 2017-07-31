export default {
	computed: {
    filterAbsensi: function(){
      return this.absensis.filter((absensi) => {
        return absensi.nama.match(this.search);
      })
    }
  }
}