<template>
  <LoaDing :active="isLoading"></LoaDing>
  <div class="check-out container">
    <div class="flow-container">
      <ul class="flow-nav">
        <li class="flow-item">
          <div class="fill flow-content fs-5">
            <i class="bi bi-1-circle-fill"></i>
            FILL IN / 填寫資料
          </div>
        </li>
        <li class="flow-item" :class="{ current: !order.is_paid}">
          <div class="check flow-content fs-5" :class="{ location: !order.is_paid}">
            <i class="bi bi-2-circle-fill"></i>
            CHECK OUT / 確認付款
          </div>
        </li>
        <li class="flow-item" :class="{ current: order.is_paid}">
          <div class="completed flow-content fs-5" :class="{ location: order.is_paid}">
            <i class="bi bi-3-circle-fill"></i>
            COMPLETED / 完成訂購
          </div>
        </li>
      </ul>
    </div>
    <div class="gratitude" v-if="order.is_paid === true">
      <div class="gratitude-content">
        <h2>訂單已成立</h2>
        <p>感謝您的購買，我們將盡快為您出貨</p>
      </div>
    </div>
    <div class="payment-list fs-4" v-if="order.is_paid === true">訂單明細</div>
    <form class="checkout-form" @submit.prevent="payOrder">
      <div class="goods-list w-100">
        <div class="detail" v-if="order.is_paid === false">購物清單</div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th>商品</th>
              <th>數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="top-line"></td>
              <td class="top-line">總計&emsp;${{ order.total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="contact-information w-100">
        <div class="customer" v-if="order.is_paid === false">訂購人資訊</div>
        <table class="table">
          <tbody>
            <tr>
              <th>訂單編號</th>
              <td>{{ orderId }}</td>
            </tr>
            <tr>
              <th>收件人姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                <span v-else class="text-success">已付款</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pay" v-if="order.is_paid === false">
          <button class="pay-btn btn w-100">確認付款</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.order = res.data.order
          }
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url)
        .then(res => {
          if (res.data.success) {
            this.getOrder()
          }
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
