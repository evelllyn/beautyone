<template>
  <LoaDing :avtive="isLoading"/>
  <div class="container fill-in">
    <div class="flow-container">
      <ul class="flow-nav">
        <li class="flow-item current">
          <div class="fill flow-content">
            <i class="bi bi-1-circle-fill"></i>
            <div>
              <span>FILL IN / </span>填寫資料
            </div>
          </div>
        </li>
        <li class="flow-item">
          <div class="check flow-content">
            <i class="bi bi-2-circle-fill"></i>
            <div>
              <span>CHECK OUT / </span>確認付款
            </div>
          </div>
        </li>
        <li class="flow-item">
          <div class="completed flow-content">
            <i class="bi bi-3-circle-fill"></i>
            <div>
              <span>COMPLETED / </span>完成訂購
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-fill">
      <div class="buy-list w-100">
        <div class="detailBox">
          <div class="detail">購物清單</div>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="col-4">商品名稱</th>
              <th class="col-3">數量</th>
              <th class="col-3">單價</th>
              <div class="blank"></div>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
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
                ${{ $filters.currency(item.final_total) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr v-if="cart.final_total === cart.total">
              <td class="top-line"></td>
              <td colspan="2" class="top-line text-end">總計&emsp;${{ $filters.currency(cart.total)}}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td class="top-line"></td>
              <td colspan="2" class="top-line text-end text-danger">折扣價&emsp;${{ $filters.currency(cart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="contact-list w-100 justify-content-center">
        <div class="customerBox">
          <div class="customer">訂購人聯絡資訊</div>
        </div>
        <VForm class="vform" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名<span class="text-danger">*</span></label>
            <VField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="form.user.name"></VField>
            <VErrorMessage name="姓名" class="invalid-feedback"></VErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話<span class="text-danger">*</span></label>
            <VField id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="required" v-model="form.user.tel"></VField>
            <VErrorMessage name="電話" class="invalid-feedback"></VErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email<span class="text-danger">*</span></label>
            <VField id="email" name="Email" type="email" class="form-control" :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入Email" rules="email|required" v-model="form.user.email"></VField>
            <VErrorMessage name="Email" class="invalid-feedback"></VErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址<span class="text-danger">*</span></label>
            <VField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required" v-model="form.user.address"></VField>
            <VErrorMessage name="地址" class="invalid-feedback"></VErrorMessage>
          </div>
          <span class="text-danger">*為必填欄位</span>
          <div class="my-2">
            <label for="message" class="form-label">備註</label>
            <textarea name="備註" id="message" cols="30" rows="10" class="form-control" v-model="form.message"></textarea>
          </div>
          <div class="send">
            <button type="submit" class="send-btn btn w-100">送出訂單</button>
          </div>
        </VForm>
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
        .catch(err => {
          console.log(err)
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
        .catch(err => {
          console.log(err)
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
        .catch(err => {
          console.log(err)
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
        .catch(err => {
          console.log(err)
        })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.isLoading = true
      this.$http.post(url, { data: order })
        .then(res => {
          this.isLoading = false
          this.$router.push(`/checkout/${res.data.orderId}`)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
