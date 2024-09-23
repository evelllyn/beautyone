export default {
  methods: {
    getFavorite () {
      if (localStorage.getItem('favoriteList')) {
        const changeList = localStorage.getItem('favoriteList')
        this.favoriteItems = JSON.parse(changeList)
      } else {
        this.favoriteItems = []
      }
    }
  }
}
