<template>
  <div class="qr">
    <div class="reader" style="height:calc(100vh - 52px)">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
    <div v-if="was_incorrect" class="toast-overlay">
      <i class="fas fa-exclamation-triangle"></i> QR Code ไม่ถูกต้อง
      กรุณาลองใหม่
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  name: "QRCodeReader",
  components: {
    QrcodeStream
  },
  data() {
    return {
      was_incorrect: false
    };
  },
  methods: {
    onDecode(result) {
      console.log(result);
      if (result.indexOf("qr.thaichana.com") !== -1) {
        const url = new URL(result);
        const params = new URLSearchParams(url.search);
        let appId = params.get("appId");
        let shopId = params.get("shopId");
        fetch(`https://api-customer.thaichana.com/shop/${appId}/${shopId}/qr`)
          .then(res => res.json())
          .then(data => {
            this.$store.dispatch("setDetail", data);
            this.$router.push("/shop_detail");
          })
          // eslint-disable-next-line no-unused-vars
          .catch(_ => (this.was_incorrect = true));
      } else {
        this.was_incorrect = true;
      }
    }
  },
  watch: {
    was_incorrect() {
      setTimeout(() => (this.was_incorrect = false), 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes slide_in {
  0% {
    bottom: -64px;
  }
  to {
    bottom: 4px;
  }
}

.toast-overlay {
  position: fixed;
  bottom: 4px;
  left: 4px;
  right: 4px;
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  animation: slide_in 0.5s forwards;
}
</style>
