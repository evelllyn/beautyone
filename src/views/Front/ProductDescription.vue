<template>
  <LoaDing :active="isLoading"/>
  <div class="item-content container">
    <div class="row justify-content-center">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="item-link">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="item-link">所有產品</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title}}</li>
        </ol>
      </nav>
      <div class="img-content">
        <img :src="product.imageUrl" alt="商品圖片" class="img-fluid mb-3">
      </div>
      <div class="allContent">
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
            <input type="text" v-model.number="item.qty" min="1" class="form-control text-center" placeholder="" aria-label="" @input="manualInput">
            <button class="num-btn btn" type="button" @click="addNumber(item)">
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
          <button type="button" class="cart-btn btn" :disabled="this.status.loadingItem === product.id" @click="addToCart(id)">
            加入購物車
          </button>
        </div>
      </div>
      <div class="tab-container">
        <ul class="tab-nav">
          <li class="tab-item">
            <button type="button" class="tab-link buy bg-white" :class="{ active: selectedTab === 'buyTab'}" @click="selectedTab = 'buyTab'">ORDER NOTIFICATION / 訂購須知</button>
          </li>
          <li class="tab-item">
            <button type="button" class="tab-link carry bg-white" :class="{ active: selectedTab === 'carryTab'}" @click="selectedTab = 'carryTab'">SHIPPING NOTIFICATION / 配送須知</button>
          </li>
        </ul>
        <component :is="selectTabComponent" class="tab-content">
          <div class="buy-content" v-if="selectedTab === 'buyTab'"></div>
          <div class="carry-content" v-else-if="selectedTab === 'carryTab'"></div>
        </component>
      </div>
    </div>
    <div class="question">
      <h5 class="words fw-bold"><span class="fs-2">FAQ</span>常見問題</h5>
      <div class="questionBox">
        <AccorDion/>
      </div>
    </div>
    <div class="goods">
      <h5 class="words fw-bold"><span class="fs-2">ON SALE</span>促銷商品</h5>
      <div class="onSaleGoods">
        <div class="col col-6 col-md-3 my-4" v-for="item in onSaleProducts" :key="item.id">
          <div class="card" @click="getProductDescription(item.id)">
            <div class="card-img-top" :style="{ backgroundImage: `url(${item.imageUrl})` }">
                <div class="sale-logo" v-if="item.price !== item.origin_price"></div>
                <span class="on" v-if="item.price !== item.origin_price">ON</span>
                <span class="sale" v-if="item.price !== item.origin_price">SALE</span>
                <div class="more">查看更多</div>
              </div>
              <div class="card-body">
                <div class="card-title">
                  <p>{{ item.title }}</p>
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
    </div>
  </div>
</template>

<script>
import BuyTab from '@/components/others/BuyTab.vue'
import CarryTab from '@/components/others/CarryTab.vue'
import AccorDion from '@/components/AccorDion.vue'

export default {
  data () {
    return {
      onSaleProducts: [],
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
    CarryTab,
    AccorDion
  },
  inject: ['$httpMessageState', 'emitter'],
  methods: {
    getOnSale () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          const allProducts = res.data.products
          this.onSaleProducts = allProducts.filter(item => item.price !== item.origin_price)
        })
        .catch(err => {
          console.log(err)
        })
    },
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
        .catch(err => {
          console.log(err)
        })
    },
    getProductDescription (id) {
      this.$router.push({ path: `/product/${id}` })
    },
    manualInput (event) {
      const newValue = event.target.value
      const newNum = Number(newValue)
      if (newNum < 1) {
        this.item.qty = 1
      }
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
            this.getCart()
            this.status.loadingItem = ''
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart })
        .then(res => {
          this.status.loadingItem = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          // data中的data下面有carts,total,final_total
          this.cart = res.data.data
          this.cartLength = res.data.data.carts.length
          this.emitter.emit('sendNum', { data: this.cartLength })
        })
        .catch(err => {
          console.log(err)
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
    this.getOnSale()
    this.$router.afterEach((to, from) => {
      if (to.path !== from.path && to.path.startsWith('/product/')) {
        this.id = to.params.productId
        this.getProduct()
      }
    })
  }
}
</script>
