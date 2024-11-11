<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" ref="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/banner/banner01.jpg" class="d-block w-100" alt="歡迎光臨">
        <div class="carousel-caption">
          <h2 class="fw-bold">BEAUTY ONE</h2>
          <p class="fs-4 slogan">MAKES YOU BE THE BEAUTIFUL ONE</p>
          <p class="fw-bold sloganSmall">—— 讓我們與您一起尋找凍齡的秘密 ——</p>
          <router-link to="/products" class="btn">SHOP NOW</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/banner/newproduct.jpg" class="d-block w-100" alt="新品即將上市">
        <div class="carousel-caption">
          <h2 class="fw-bold">BEAUTY ONE</h2>
          <p class="fs-4 slogan">MAKES YOU BE THE BEAUTIFUL ONE</p>
          <p class="fw-bold sloganSmall">—— 冬季新品&emsp;即將上市 ——</p>
          <router-link to="/products" class="btn">SHOP NOW</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel'

export default {
  data () {
    return {
      carousel: null
    }
  },
  mounted () {
    this.carousel = new Carousel(this.$refs.carousel, {
      interval: 7000,
      pause: false
    })
  }
}
</script>
