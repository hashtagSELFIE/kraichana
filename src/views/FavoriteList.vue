<template>
  <div class="favorite-list">
    <h1 style="margin-bottom:.4rem">แก้ไขรายการโปรด</h1>
    <div v-for="i in 5" :key="i" class="list-item">
      <div class="media">
        <app-shopping-icon />
        <div class="body" style="margin-left:10px">
          <h2>ดองกิ the market</h2>
          <p>ร้านค้าปลีก/ค้าส่ง</p>
        </div>
        <div class="close"><i class="fas fa-times-circle fa-2x"></i></div>
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
.favorite-list {
  margin-top: 1rem;
  padding: 0 20px;
}

.list-item > .media > .close {
  position: absolute;
  top: -8px;
  right: -8px;
  color: #ff3860;
}
</style>
