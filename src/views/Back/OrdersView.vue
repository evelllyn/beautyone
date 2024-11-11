<template>
  <LoaDing :active="isLoading"/>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>訂購時間</th>
        <th>商品款項</th>
        <th>E-mail</th>
        <th>訂單金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="tempOrder.length" :class="{'text-secondary': !item.is_paid}">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <span v-text="item.user.email" v-if="item.user"></span>
          </td>
          <td>
            <ul>
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量: {{ product.qty }} {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-ckeck form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwich${item.id}`" v-model="item.is_paid" @change="updatePaid(item)">
              <label class="form-check-label" :for="`paidSwich${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>尚未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">檢視</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelOrderModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal ref="orderModal" :order="tempOrder" @update-paid="updatePaid"/>
  <DelModal ref="delModal" :item="tempOrder" @del-item="delOrder"/>
  <PagiNation :pages="pagination" @emit-page="getOrders"/>
</template>

<script>
import OrderModal from '@/components/Modals/OrderModal.vue'
import DelModal from '@/components/Modals/DelModal.vue'
import PagiNation from '@/components/PagiNation.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      tempOrder: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    OrderModal,
    DelModal,
    PagiNation
  },
  methods: {
    getOrders (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      this.isLoading = true
      this.$http.get(url, this.tempProduct)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    openModal (isNew, item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    updatePaid (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid })
        .then(res => {
          this.isLoading = false
          this.getOrders()
          this.$httpMessageState(res, '更新')
        })
        .catch(err => {
          console.log(err)
        })
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then(res => {
          this.isLoading = false
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getOrders()
        })
        .catch(err => {
          console.log(err)
        })
    },
    created () {
      this.getOrders()
    }
  }
}
</script>
