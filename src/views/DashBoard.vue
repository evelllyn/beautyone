<template>
  <HomeNavbar/>
  <div class="position-relative">
    <ToastMessages/>
    <router-view/>
  </div>
  <FooterNav/>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import 'bootstrap/dist/js/bootstrap.min'
import HomeNavbar from '@/components/FrontNavbar.vue'
import FooterNav from '@/components/FooterNav.vue'

export default {
  components: {
    ToastMessages,
    HomeNavbar,
    FooterNav
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
