<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BEAUTY</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link">商品列表</router-link>
          <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
          <router-link to="/dashboard/coupons" class="nav-link">優惠券</router-link>
        </div>
      </div>
      <div id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/user/cart" class="nav-link">
            購物車
            <span class="badge rounded-pill bg-danger">0</span>
          </router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then(res => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
