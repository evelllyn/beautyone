<template>
  <LoaDing :avtive="isLoading"></LoaDing>
  <div class="container favContainer goods pt-3 all-content">
    <div class="row" v-if="favoriteProducts.length">
      <div class="col col-6 col-md-3 my-4" v-for="item in favoriteProducts" :key="item.id">
        <div class="card" @click="getProduct(item.id)">
          <div class="card-img-top" :style="{ backgroundImage: `url(${item.imageUrl})` }">
            <div class="sale-logo" v-if="item.price != item.origin_price"></div>
            <span class="on" v-if="item.price != item.origin_price">ON</span>
            <span class="sale" v-if="item.price != item.origin_price">SALE</span>
            <div class="more">查看更多</div>
          </div>
          <div class="card-body">
            <div class="card-title">
              <h5>{{ item.title }}</h5>
              <a href="#" @click.stop.prevent="removeFavorite(item)">
                <i class="bi bi-heart" v-if="favoriteItems.every((id) => item.id !== id)"></i>
                <i class="bi bi-heart-fill text-danger" v-else></i>
              </a>
            </div>
            <div class="product-price">
              <span class="text-danger" v-if="item.price">NT ${{ item.price }}</span>
              <span v-if="!item.price">{{ item.origin_price }}元</span>
              <del class="del-price float-end" v-if="item.price != item.origin_price">原價NT${{ item.origin_price }}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container spin" v-else-if="isLoading">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="noFavorite">
      <i class="bi bi-chat-square-heart"></i>
      <div class="nothing-content fs-3">目前沒有收藏的產品喔</div>
      <router-link to="/products" class="btn surf-btn">現在去逛逛</router-link>
    </div>
  </div>
</template>

<script>
import favoriteMixin from '@/mixins/favoriteMixin'

export default {
  data () {
    return {
      favoriteItems: [],
      favoriteProducts: [],
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getFavoriteProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            const allProducts = res.data.products
            this.favoriteProducts = allProducts.filter(item => this.favoriteItems.some((id) => item.id === id))
          }
        })
    },
    removeFavorite (item) {
      this.favoriteItems.indexOf(item.id)
      this.favoriteItems.splice(this.favoriteItems.indexOf(item.id), 1)
      this.emitter.emit('push-message', {
        style: 'danger',
        title: '已移除收藏'
      })
      localStorage.setItem('favoriteList', JSON.stringify(this.favoriteItems))
      this.getFavorite()
      this.getFavoriteProducts()
    }
  },
  mixins: [favoriteMixin],
  created () {
    this.getFavorite()
    this.getFavoriteProducts()
  }
}
</script>
