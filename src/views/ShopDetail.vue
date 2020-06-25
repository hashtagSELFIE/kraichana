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
</style>
