<template>
  <div class="container goods pt-3 all-content">
    <div class="row">
      <div class="col col-6 col-md-3 my-4" v-for="item in products" :key="item.id">
        <div class="card" @click="getProduct(item.id)">
          <div class="card-img-top" :style="{ backgroundImage: `url(${item.imageUrl})` }">
            <div class="sale-logo" v-if="item.price != item.origin_price"></div>
            <span class="on" v-if="item.price != item.origin_price">ON</span>
            <span class="sale" v-if="item.price != item.origin_price">SALE</span>
            <div class="more">查看更多</div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <div class="product-price">
              <span class="text-danger" v-if="item.price">NT ${{ item.price }}</span>
              <span v-if="!item.price">{{ item.origin_price }}元</span>
              <del class="del-price float-end" v-if="item.price != item.origin_price">原價NT${{ item.origin_price }}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PagiNation :pages="pagination" @emit-page="getProducts"></PagiNation>
</template>

<script>
import PagiNation from '@/components/PagiNation.vue'

export default {
  data () {
    return {
      products: [],
      product: {},
      pagination: {},
      status: {
        loadingItem: ''
      },
      cart: {}
    }
  },
  components: {
    PagiNation
  },
  inject: ['$httpMessageState'],
  methods: {
    getProducts (page) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
