<template>
  <marquee class="text-white p-1">即日起至 11 / 30 全站滿$1000免運費!&emsp;輸入優惠碼「BEAUTY2024」即可享有全站88折優惠!</marquee>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a class="logo navbar-brand" href="#">
        <img src="../assets/logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" aria-current="page" class="nav-link router-link-active">HOME / 首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">ALL PRODUCTS / 所有產品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorite" class="nav-link">MY FAVORITE / 我的最愛</router-link>
          </li>
        </ul>
        <ul class="right navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">
              <i class="bi bi-cart-fill"></i>
              <span class="badge rounded-pill bg-danger">{{ cart.carts.length }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <i class="bi bi-person-circle"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      cart: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          // data中的data下面有carts,total,final_total
          this.cart = res.data.data
        })
    }
  },
  created () {
    this.getCart()
  }
}

</script>
