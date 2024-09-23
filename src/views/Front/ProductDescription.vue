<template>
  <LoaDing :active="isLoading"></LoaDing>
  <div class="item-content container">
    <div class="row justify-content-center">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/products" class="item-link">所有產品</router-link>
          </li>
          <li class="breadcrumb-item">
            <a href="#" class="item-link">{{ product.category}}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title}}</li>
        </ol>
      </nav>
      <div class="img-content col-6">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </div>
      <div class="allContent col-6">
        <article>
          <h2>{{ product.title}}</h2>
          <div class="description">
            <span>【產品描述】</span><br>
            {{ product.description}}<br>
            {{ product.content}}
          </div>
        </article>
        <div class="fs-3 text-danger" v-if="product.price">
          NT ${{ product.price}}
        </div>
        <div v-if="!product.price">
          {{ product.origin_price}}
        </div>
        <del v-if="product.price != product.origin_price">
          原價NT$ {{ product.origin_price}}
        </del>
        <div class="discount">
          <p>即日起至 8 / 8 全站滿$1000免運費</p>
          <p>輸入優惠碼「<span>BEAUTY2024</span>」享全站88折優惠</p>
        </div>
        <div class="addCart">
          <div class="input-group">
            <button class="num-btn btn" type="button" @click="minusNumber(item)">
              <i class="bi bi-dash-lg"></i>
            </button>
            <input type="text" v-model.number="item.qty" min="1" class="form-control text-center" placeholder="" aria-label="">
            <button class="num-btn btn" type="button" @click="addNumber(item)">
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
          <button type="button" class="cart-btn btn" :disabled="this.status.loadingItem === product.id" @click="addToCart(product.id)">
            加入購物車
          </button>
        </div>
      </div>
      <div class="tab-container">
        <ul class="tab-nav">
          <li class="tab-item">
            <button class="tab-link buy bg-white fs-5" :class="{ active: selectedTab === 'buyTab'}" @click="selectedTab = 'buyTab'">ORDER NOTIFICATION / 訂購須知</button>
          </li>
          <li class="tab-item">
            <button class="tab-link carry bg-white fs-5" :class="{ active: selectedTab === 'carryTab'}" @click="selectedTab = 'carryTab'">SHIPPING NOTIFICATION / 配送須知</button>
          </li>
        </ul>
        <component :is="selectTabComponent" class="tab-content">
          <div class="buy-content" v-if="selectedTab === 'buyTab'"></div>
          <div class="carry-content" v-else-if="selectedTab === 'carryTab'"></div>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import BuyTab from '@/components/BuyTab.vue'
import CarryTab from '@/components/CarryTab.vue'

export default {
  data () {
    return {
      product: {},
      id: '',
      cart: {
        carts: []
      },
      item: {
        qty: 1
      },
      status: {
        loadingItem: ''
      },
      selectedTab: 'buyTab',
      tabComponents: {
        buyTab: BuyTab,
        carryTab: CarryTab
      }
    }
  },
  components: {
    BuyTab,
    CarryTab
  },
  inject: ['$httpMessageState'],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.product = res.data.product
          }
        })
    },
    addNumber (item) {
      item.qty++
      this.updateCart(item)
    },
    minusNumber (item) {
      if (item.qty > 1) {
        item.qty--
        this.updateCart(item)
      }
    },
    addToCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: this.item.qty
      }
      this.$http.post(url, { data: cart })
        .then(res => {
          const itemNumber = res.data.data
          if (res.data.success) {
            this.$httpMessageState(res, '加入購物車')
            this.cart.carts.push(itemNumber)
            this.status.loadingItem = ''
          }
        })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart })
        .then(res => {
          this.isLoading = false
          this.status.loadingItem = ''
        })
    }
  },
  computed: {
    selectTabComponent () {
      return this.tabComponents[this.selectedTab]
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
