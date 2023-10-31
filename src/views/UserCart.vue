<template>
  <LoaDing :avtive="isLoading"></LoaDing>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-8">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody v-for="item in products" :key="item.id">
            <tr style="width: 200px">
              <td style="height: 100px; background-size: cover; background-position: center" :style="{ backgroundImage: `url(${item.imageUrl})` }"></td>
              <td><a href="#">{{ item.title }}</a></td>
              <td>
                <div v-if="!item.price">{{ item.origin_price }}元</div>
                <del v-if="item.price">原價{{ item.origin_price }}元</del>
                <div v-if="item.price">{{ item.price }}元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">查看更多</button>
                  <button type="button" class="btn btn-outline-danger" @click="addCart(item.id)" :disabled="this.status.loadingItem === item.id">加入購物車</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 購物車列表 -->
      <div col-md-5>
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th class="col-8">商品</th>
                <th class="col-1">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td >
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input type="number" class="form-control" min="1" :disabled="status.loadingItem === item.id" v-model.number="item.qty" @change="updateCart(item)">
                      <div class="input-group-text">{{ item.product.unit }}</div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small v-if="cart.final_total !== cart.total">折扣價:</small>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                  <td class="text-end">
                    <button type="button" class="btn btn-outline-danger btn-sm" :disabled="status.loadingItem === item.id" @click="removeCartItem(item.id)">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total)}}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="2" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
            </tfoot>
          </table>
            <div class="input-group input-group-sm mb-3">
              <div class="col-8"></div>
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button type="button" class="btn btn-outline-secondary" @click="addCouponCode">
                  套用優惠券
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <VForm class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="form.user.name"></VField>
          <VErrorMessage name="姓名" class="invalid-feedback"></VErrorMessage>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VField id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="required" v-model="form.user.tel"></VField>
          <VErrorMessage name="電話" class="invalid-feedback"></VErrorMessage>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <VField id="email" name="Email" type="email" class="form-control" :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入Email" rules="email|required" v-model="form.user.email"></VField>
          <VErrorMessage name="Email" class="invalid-feedback"></VErrorMessage>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required" v-model="form.user.address"></VField>
          <VErrorMessage name="地址" class="invalid-feedback"></VErrorMessage>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">備註</label>
          <textarea name="備註" id="message" cols="30" rows="10" class="form-control" v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-primary">送出訂單</button>
        </div>
      </VForm>
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
      cart: {},
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  inject: ['$httpMessageState'],
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
      this.$router.push(`/user/product/${id}`)
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
          console.log(res)
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
          this.$httpMessageState(res, '移除購物車商品')
          this.status.loadingItem = ''
          this.getCart()
        })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.isLoading = true
      this.$http.post(url, { data: order })
        .then(res => {
          this.isLoading = false
          console.log(res)
        })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
