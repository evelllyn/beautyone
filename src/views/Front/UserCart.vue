<template>
  <LoaDing :avtive="isLoading"></LoaDing>
  <div class="container fill-in">
    <div class="row cart">
      <div v-if="cart.carts.length">
        <h3>購物清單</h3>
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="col-1">圖片</th>
              <th class="col-5">商品名稱</th>
              <th class="col-2">數量</th>
              <th>單價</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="list-pic" :style="{ backgroundImage: `url(${item.product.imageUrl})` }"></td>
              <td>
                {{ item.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input type="number" class="form-control" min="1" :disabled="status.loadingItem === item.id" v-model.number="item.qty" @change="updateCart(item)">
                  <div class="input-group-text">{{ item.product.unit }}</div>
                </div>
              </td>
              <td>
                <small v-if="cart.final_total !== cart.total">折扣價</small>
                $ {{ $filters.currency(item.final_total) }}
                <div class="text-danger" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td class="text-end">
                <button type="button" class="btn btn-outline-danger btn-sm" :disabled="status.loadingItem === item.id" @click="removeCartItem(item.id)">
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end">總計</td>
              <td class="text-end">$ {{ $filters.currency(cart.total)}}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="4" class="text-end text-danger">折扣價</td>
              <td class="text-end text-danger">$ {{ $filters.currency(cart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="use-coupon input-group input-group-sm mb-3">
          <div class="col-7"></div>
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button type="button" class="btn coupon-btn" @click="addCouponCode">
              使用優惠券
            </button>
          </div>
        </div>
        <div class="go-pay text-end">
          <router-link to="/fillin" class="btn go-btn">前往結帳</router-link>
        </div>
      </div>
      <div class="container spin" v-else-if="isLoading">
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="nothing">
        <i class="bi bi-cart-dash"></i>
        <div class="nothing-content fs-3">哎呀，購物車目前是空的喔</div>
        <router-link to="/products" class="btn surf-btn">現在去逛逛</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      cart: {
        carts: []
      },
      coupon_code: '',
      isLoading: false
    }
  },
  inject: ['$httpMessageState', 'emitter'],
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
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart })
        .then(res => {
          this.status.loadingItem = ''
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          // data中的data下面有carts,total,final_total
          this.cart = res.data.data
          this.cartLength = res.data.data.carts.length
          this.emitter.emit('sendNum', { data: this.cartLength })
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
          this.getCart()
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon })
        .then(res => {
          this.isLoading = false
          this.$httpMessageState(res, '套用優惠券')
          this.getCart()
        })
    },
    removeCartItem (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url)
        .then(res => {
          this.$httpMessageState(res, '移除商品')
          this.status.loadingItem = ''
          this.getCart()
        })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
