<template>
  <div class="home">
    <section style="margin:1.5rem 0">
      <h1>🙏 สวัสดีค่ะ</h1>
      <p>ใครชนะ? ป้องกันการแพร่ระบาด COVID-19</p>
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
          <div color="#9BD126" size="57" class="css-bcjcx5 e1ypfm4x0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <div class="body" style="margin-left:10px">
            <h2>ดองกิ the market</h2>
            <p>ร้านค้าปลีก/ค้าส่ง</p>
          </div>
        </div>
      </div>
      <div class="list-item" style="text-align:center;font-size:1.25rem">
        ดูเพิ่มเติม...
      </div>
    </section>
    <hr />
    <section>
      <div class="media center" style="margin-bottom:8px">
        <h1 class="body">รายการโปรด</h1>
        <div>
          <router-link to="/history">
            <i class="fas fa-pen fa-2x"></i>
          </router-link>
        </div>
      </div>
      <div v-for="i in 5" :key="i" class="list-item">
        <div class="media">
          <div color="#9BD126" size="57" class="css-bcjcx5 e1ypfm4x0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"
                fill="#fff"
              ></path>
            </svg>
          </div>
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
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
h1,
h2,
p {
  margin: 0;
}

.home {
  margin-top: 2rem;
}

.css-bcjcx5 {
  width: 57px;
  height: 57px;
  border-radius: 57px;
  background-color: #9bd126;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
</style>
