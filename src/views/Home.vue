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
      <div v-for="i in 3" :key="i" class="list-item">
        <div class="media">
          <app-shopping-icon />
          <div class="body" style="margin-left:10px">
            <h2>ดองกิ the market</h2>
            <p>ร้านค้าปลีก/ค้าส่ง</p>
          </div>
        </div>
      </div>
      <router-link to="/history">
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
      <div v-for="i in 5" :key="i" class="list-item">
        <div class="media">
          <app-shopping-icon />
          <div class="body" style="margin-left:10px">
            <h2>ดองกิ the market</h2>
            <p>ร้านค้าปลีก/ค้าส่ง</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppShoppingIcon from "@/components/AppShoppingIcon";

export default {
  name: "Home",
  components: {
    AppShoppingIcon
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 2rem;
  padding: 0 20px;
}
</style>
