<template>
  <HomeNavbar></HomeNavbar>
  <div>
    <router-view/>
  </div>
  <FooterNav></FooterNav>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar.vue'
import FooterNav from '@/components/FooterNav.vue'

export default {
  components: {
    HomeNavbar,
    FooterNav
  }
}
</script>
