<template>
  <div class="shopdetail">
    <section class="media center">
      <app-shopping-icon />
      <div class="body" style="margin-left:10px">
        <h2>ดองกิ the market</h2>
        <p>ร้านค้าปลีก/ค้าส่ง</p>
      </div>
    </section>
    <hr />
    กรุณาเลือกเช็คอิน หรือเช็คเอาท์
    <div class="column">
      <a
        class="btn"
        style="flex:1;margin-right:5px;justify-content:flex-start;
    align-items:center;display:flex;flex-direction:column"
      >
        <img src="../assets/checkin-icon.png" height="120" width="120" />
        <div>เช็คอิน</div>
      </a>
      <a
        class="btn"
        style="flex:1;margin-left:5px;
    justify-content:flex-start;align-items:center;display:flex;flex-direction:column"
      >
        <img src="../assets/checkout-icon.png" height="120" width="120" />
        <div>เช็คเอาท์</div>
      </a>
    </div>
  </div>
</template>

<script>
import AppShoppingIcon from "@/components/AppShoppingIcon";

export default {
  name: "ShopDetail",
  components: {
    AppShoppingIcon
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
}

.column {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
}

img {
  padding: 10px;
}
</style>
