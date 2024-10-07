<template>
  <div class="modal discountModal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="../assets/logo.png" alt="">
          <hr>
          <span>輸入優惠碼「BEAUTY2024」<br>即可享有全站8折優惠!</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" @click="couponCopy">領取優惠券</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: {}
    }
  },
  inject: ['emitter'],
  methods: {
    couponCopy () {
      const textCopy = 'BEAUTY2024'
      navigator.clipboard.writeText(textCopy)
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已領取優惠券'
          })
          this.modal.hide()
        })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    this.modal.show()
  }
}
</script>
