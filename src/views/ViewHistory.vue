<template>
  <div class="view-history">
    <h1 style="margin-bottom:.4rem">ประวัติการสแกน</h1>
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
import storeGetter from "@/store/getter.js";

export default {
  name: "ViewHistory",
  components: {
    AppShoppingIcon
  },
  computed: {
    ...storeGetter
  },
  methods: {
    gotoShop(shopData) {
      this.$store.dispatch("setDetail", shopData);
      this.$router.push("/shop_detail");
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
