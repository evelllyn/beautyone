<template>
  <div class="container goods pt-3 others-content">
    <div class="row">
      <div class="col col-6 col-md-3 my-4" v-for="item in filteredProduct" :key="item.id">
        <div class="card" @click="getProductDescription(item.id)">
          <div class="card-img-top" :style="{ backgroundImage: `url(${item.imageUrl})` }">
            <div class="sale-logo" v-if="item.price != item.origin_price"></div>
            <span class="on" v-if="item.price != item.origin_price">ON</span>
            <span class="sale" v-if="item.price != item.origin_price">SALE</span>
            <div class="more">查看更多</div>
          </div>
          <div class="card-body">
            <div class="card-title">
              <p>{{ item.title }}</p>
              <a href="#" @click.stop.prevent="addFavorite(item)">
                <i class="bi bi-heart" v-if="favoriteItems.every((id) => item.id !== id)"></i>
                <i class="bi bi-heart-fill text-danger" v-else></i>
              </a>
            </div>
            <div class="product-price">
              <span class="text-danger fs-5" v-if="item.price">NT ${{ item.price }}</span>
              <span v-if="!item.price">{{ item.origin_price }}元</span>
              <del class="del-price float-end" v-if="item.price != item.origin_price">原價NT${{ item.origin_price }}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import favoriteMixin from '@/mixins/favoriteMixin'

export default {
  data () {
    return {
      products: [],
      product: {},
      favoriteId: [],
      favoriteItems: [],
      status: {
        loadingItem: ''
      },
      cart: {}
    }
  },
  inject: ['emitter'],
  computed: {
    filteredProduct () {
      return this.products.filter(product => product.category === '其他產品')
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          this.products = res.data.products
        })
    },
    getProductDescription (id) {
      this.$router.push(`/product/${id}`)
    },
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
  },
  mixins: [favoriteMixin],
  created () {
    this.getFavorite()
    this.getProducts()
  }
}
</script>
