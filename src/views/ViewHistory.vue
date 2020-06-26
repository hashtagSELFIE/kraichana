<template>
  <div class="view-history">
    <div class="media center" style="margin-bottom:.4rem">
      <h1 class="body">ประวัติสถานที่</h1>
      <div @click="clearHistory()"><i class="fas fa-trash-alt fa-2x"></i></div>
    </div>
    <app-empty-state v-if="!getHistory.length" name="ประวัติสถานที่" />
    <div
      v-for="(shop, index) in getHistory"
      :key="index"
      class="list-item"
      @click="gotoShop(shop)"
    >
      <div class="media">
        <app-shopping-icon />
        <div class="body" style="margin-left:10px">
          <h2>{{ shop.shopName }}</h2>
          <p>{{ shop.businessType }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppShoppingIcon from "@/components/AppShoppingIcon";
import AppEmptyState from "@/components/AppEmptyState";
import storeGetter from "@/store/getter.js";

export default {
  name: "ViewHistory",
  components: {
    AppShoppingIcon,
    AppEmptyState
  },
  computed: {
    ...storeGetter
  },
  methods: {
    gotoShop(shopData) {
      this.$store.dispatch("setDetail", shopData);
      this.$router.push("/shop_detail");
    },
    clearHistory() {
      if (
        confirm(
          "ต้องการล้างประวัติสถานที่หรือไม่?\nข้อมูลสถานที่ทั้งหมดจะถูกลบ และไม่สามารถกู้คืนได้!"
        )
      )
        this.$store.dispatch("clearHistory");
    }
  }
};
</script>

<style scoped>
.view-history {
  margin-top: 1rem;
  padding: 0 20px;
}
</style>
