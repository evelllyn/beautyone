<template>
  <div class="toast-container position-absolute pe-3">
    <ToaSt v-for="(msg, key) in messages" :key="key" :msg="msg"></ToaSt>
  </div>
</template>

<script>
import ToaSt from '@/components/ToaSt.vue'

export default {
  data () {
    return {
      messages: []
    }
  },
  components: {
    ToaSt
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
