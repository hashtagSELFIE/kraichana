<template>
  <div class="favorite-list">
    <h1 style="margin-bottom:.4rem">แก้ไขรายการโปรด</h1>
    <div
      v-for="(shop, index) in getFavorite"
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
        <div
          class="close"
          @click.stop="
            removeFavorite({ appId: shop.appId, shopId: shop.shopId })
          "
        >
          <i class="fas fa-times-circle fa-2x"></i>
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
    },
    removeFavorite(data) {
      this.$store.dispatch("deleteFavorite", data);
    }
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
  z-index: 2;
}
</style>
