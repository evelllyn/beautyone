<template>
  <div class="modal fade" id="homeModal" tabindex="-1" aria-labelledby="homeModalLabel" aria-hidden="true" ref="modal">
    <div class="homeModal-dialog">
      <div class="homeModal-content">
        <div class="homeModal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="homeModal-body">
          <h4 class="title1 p-2 text-light">即日起至8 / 8全站
            <span class="fw-bold fs-2">滿$1000免運費!</span>
          </h4>
          <h4 class="p-2 text-light">結帳輸入優惠碼 享
            <span class="fw-bold fs-2">全站88折優惠!</span>
          </h4>
        </div>
        <div class="homeModal-footer">
          <input class="fs-5" type="text" value="BEAUTY2024" ref="coupontext" readonly>
          <button type="button" class="btn" ref="copybtn">複製優惠碼</button>
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
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    const copyButton = this.$refs.copybtn
    const textInput = this.$refs.coupontext
    copyButton.addEventListener('mouseenter', () => {
      copyButton.style.color = '#fff'
      copyButton.style.backgroundColor = '#004225'
    })
    copyButton.addEventListener('mouseleave', () => {
      copyButton.style.color = '#000'
      copyButton.style.backgroundColor = '#fff'
    })
    copyButton.addEventListener('click', () => {
      textInput.select()
      document.execCommand('copy')
    })
    // this.modal.show()
  }
}
</script>
