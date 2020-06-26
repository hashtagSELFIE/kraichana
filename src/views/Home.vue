<template>
  <div class="home">
    <section class="media center" style="margin:1.5rem 0">
      <div class="body">
        <h1>🙏 สวัสดีค่ะ</h1>
        <p>กดสแกน QR Code ได้เลยค่ะ</p>
      </div>
      <div>
        <router-link to="/qr"><i class="fas fa-qrcode fa-5x"></i></router-link>
      </div>
    </section>
    <hr />
    <section>
      <div class="media center" style="margin-bottom:8px">
        <h1 class="body">สถานที่ล่าสุด</h1>
        <div>
          <router-link to="/history">
            <i class="fas fa-history fa-2x"></i>
          </router-link>
        </div>
      </div>
      <app-empty-state v-if="!getTopHistory.length" name="ประวัติสถานที่" />
      <div
        v-for="(shop, index) in getTopHistory"
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
      <router-link v-if="getHistory.length > 3" to="/history">
        <div class="list-item" style="text-align:center;font-size:1.25rem">
          ดูเพิ่มเติม...
        </div>
      </router-link>
    </section>
    <hr />
    <section>
      <div class="media center" style="margin-bottom:8px">
        <h1 class="body">รายการโปรด</h1>
        <div>
          <router-link to="/favorite">
            <i class="fas fa-pen fa-2x"></i>
          </router-link>
        </div>
      </div>
      <app-empty-state
        v-if="!getFavorite.length"
        name="รายการโปรด"
        description="ท่านสามารถเพิ่มสถานที่ลงในรายการโปรดได้หลังจากเช็คอินสถานที่นั้น"
      />
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppShoppingIcon from "@/components/AppShoppingIcon";
import AppEmptyState from "@/components/AppEmptyState";
import storeGetter from "@/store/getter.js";

export default {
  name: "Home",
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
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 2rem;
  padding: 0 20px;
}
</style>
