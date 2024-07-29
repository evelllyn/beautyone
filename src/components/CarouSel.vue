<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" ref="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/banner01.jpg" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="fw-bold">BEAUTY ONE</h2>
          <p class="fs-4">MAKES YOU BE THE BEAUTIFUL ONE</p>
          <p class="fs-5 fw-bold">—— 讓我們與您一起尋找凍齡的秘密 ——</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/newproduct.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="fw-bold">BEAUTY ONE</h2>
          <p class="fs-4">MAKES YOU BE THE BEAUTIFUL ONE</p>
          <p class="fs-5 fw-bold">—— 冬季新品&emsp;即將上市 ——</p>
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
