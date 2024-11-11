export default {
  methods: {
    addFavorite (item) {
      if (this.favoriteItems.every((id) => item.id !== id)) {
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已加入收藏'
        })
        this.favoriteItems.unshift(item.id)
      } else {
        this.favoriteItems.indexOf(item.id)
        this.favoriteItems.splice(this.favoriteItems.indexOf(item.id), 1)
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '已移除收藏'
        })
      }
      localStorage.setItem('favoriteList', JSON.stringify(this.favoriteItems))
      this.getFavorite()
    }
  }
}
