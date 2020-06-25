<template>
  <div class="view-history">
    <h1 style="margin-bottom:.4rem">ประวัติการสแกน</h1>
    <div v-for="i in 5" :key="i" class="list-item">
      <div class="media">
        <app-shopping-icon />
        <div class="body" style="margin-left:10px">
          <h2>ดองกิ the market</h2>
          <p>ร้านค้าปลีก/ค้าส่ง</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppShoppingIcon from "@/components/AppShoppingIcon";

export default {
  name: "ViewHistory",
  components: {
    AppShoppingIcon
  }
};
</script>

<style scoped>
.view-history {
  margin-top: 1rem;
  padding: 0 20px;
}
</style>
