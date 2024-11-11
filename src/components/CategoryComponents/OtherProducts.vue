<template>
  <LoaDing :active="isLoading"/>
  <div class="container goods others-content">
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
              <span class="text-danger" v-if="item.price">NT ${{ item.price }}</span>
              <span v-if="!item.price">{{ item.origin_price }}元</span>
              <del class="del-price" v-if="item.price != item.origin_price">原價NT${{ item.origin_price }}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import favoriteMixin from '@/mixins/favoriteMixin'
import getProductsMixin from '@/mixins/getProductsMixin'
import addFavorite from '@/mixins/addFavorite'

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
    getProductDescription (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mixins: [favoriteMixin, getProductsMixin, addFavorite],
  created () {
    this.getFavorite()
    this.getProducts()
  }
}
</script>
