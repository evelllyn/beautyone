<template>
  <LoaDing :active="isLoading"></LoaDing>
  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="openModal(true)">建立優惠券</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>優惠券</th>
        <th>折扣</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon"></DelModal>
</template>

<script>
import CouponModal from '@/components/Modals/CouponModal.vue'
import DelModal from '@/components/Modals/DelModal.vue'

export default {
  props: {
    config: Object
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enable: 0,
        percent: 100,
        code: ''
      },
      isNew: false,
      isLoading: false
    }
  },
  components: {
    CouponModal,
    DelModal
  },
  inject: ['$httpMessageState'],
  methods: {
    getCoupons () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.isLoading = true
      this.$http.get(url, this.tempProduct)
        .then(res => {
          this.isLoading = false
          this.coupons = res.data.coupons
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = { due_date: new Date().getTime() / 1000 }
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    },
    updateCoupon (tempCoupon) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
      }
      const couponComponent = this.$refs.couponModal
      this.$http[httpMethod](api, { data: tempCoupon })
        .then(res => {
          couponComponent.hideModal()
          this.getCoupons()
          this.$httpMessageState(res, '更新')
        })
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url)
        .then(res => {
          this.isLoading = false
          this.$httpMessageState(res, '刪除優惠券')
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getCoupons()
        })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
