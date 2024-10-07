<template>
  <HomeNavbar></HomeNavbar>
  <div class="position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
  <FooterNav></FooterNav>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
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
