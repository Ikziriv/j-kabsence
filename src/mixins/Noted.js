export default {
	computed: {
    filterNote: function(){
      return this.notes.filter((note) => {
        return note.title.match(this.search);
      })
    }
  }
}