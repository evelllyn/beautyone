<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">後台</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/managecenter/products" class="nav-link">商品</router-link>
          <router-link to="/managecenter/orders" class="nav-link">訂單</router-link>
          <router-link to="/managecenter/coupons" class="nav-link">優惠券</router-link>
        </div>
      </div>
      <div id="navbarNavAltMarkup">
        <div class="navbar-nav">
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
