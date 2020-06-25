<template>
  <div class="container">
    <h1 class="text-center">QRcode</h1>
    <div class="reader">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
    <h2 class="text-center">{{ msg }}</h2>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  name: "qrcodeReader",
  components: {
    QrcodeStream,
  },
  data() {
    return {
      msg: "message",
      appId: null,
      shopId: null,
    };
  },
  methods: {
    onDecode(result) {
      console.log(result);
      if (result.indexOf("qr.thaichana.com") !== -1) {
        this.msg = "qrcode ถูกต้อง";
        const url = new URL(result);
        const params = new URLSearchParams(url.search);
        this.appId = params.get("appId");
        this.shopId = params.get("shopId");
        console.log(this.appId, this.shopId);
      } else {
        this.msg = "qrcode ไม่ถูกต้อง";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}

.reader {
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
