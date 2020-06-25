<template>
  <div class="qr">
    <div class="reader" style="width:100%;height:calc(100vh - 52px)">
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
    QrcodeStream
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    onDecode(result) {
      console.log(result);
      if (result.indexOf("qr.thaichana.com") !== -1) {
        this.msg = "QRcode ถูกต้อง";

        const url = new URL(result);
        const params = new URLSearchParams(url.search);
        let appId = params.get("appId");
        let shopId = params.get("shopId");

        this.$store.dispatch("setDetail", {
          appId: appId,
          shopId: shopId,
        });
      } else {
        this.msg = "QRcode ไม่ถูกต้อง";
      }
    }
  }
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
