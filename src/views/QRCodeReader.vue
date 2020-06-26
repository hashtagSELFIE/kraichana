<template>
  <div class="qr">
    <div class="reader" style="height:calc(100vh - 52px)">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
    <app-toast v-if="was_incorrect" msg="QR Code ไม่ถูกต้อง" />
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import AppToast from "@/components/AppToast";

export default {
  name: "QRCodeReader",
  components: {
    QrcodeStream,
    AppToast
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
            this.$router.replace("/shop_detail");
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
      if (this.was_incorrect)
        setTimeout(() => (this.was_incorrect = false), 5000);
    }
  }
};
</script>
