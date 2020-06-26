<template>
  <div class="shopdetail">
    <section class="media center">
      <app-shopping-icon />
      <div class="body" style="margin-left:10px">
        <h2>{{ getDetail.shopName }}</h2>
        <p>{{ getDetail.businessType }}</p>
      </div>
    </section>
    <hr />
    กรุณาเลือกเช็คอิน หรือเช็คเอาท์
    <div class="columns">
      <router-link to="/shop_result" class="btn column">
        <img
          class="img-fluid"
          src="../assets/checkin-icon.png"
          style="margin:auto"
        />
        <div style="margin-top:8px">เช็คอิน</div>
      </router-link>
      <router-link
        to="/shop_result_out"
        class="btn column"
        style="margin-left:16px"
      >
        <img
          class="img-fluid"
          src="../assets/checkout-icon.png"
          style="margin:auto"
        />
        <div style="margin-top:8px">เช็คเอาท์</div>
      </router-link>
    </div>
    <router-link
      to="/shop_qr"
      class="list-item"
      style="display:block;margin-top:16px;text-align:center"
      ><i class="fas fa-share-alt"></i> แชร์ QR ร้านปัจจุบัน</router-link
    >
  </div>
</template>

<script>
import AppShoppingIcon from "@/components/AppShoppingIcon";
import storeGetter from "@/store/getter.js";

export default {
  name: "ShopDetail",
  components: {
    AppShoppingIcon
  },
  computed: {
    ...storeGetter
  }
};
</script>

<style lang="scss" scoped>
.shopdetail {
  margin-top: 2rem;
  padding: 0 20px;
}

.btn {
  display: block;
  padding: 20px;
  color: black;
  background: #fcfcfd;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: #287fe4;
  text-align: center;
}

.columns {
  display: flex;
  margin-top: 8px;
}

.column {
  flex: 1 1 0;
}
</style>
