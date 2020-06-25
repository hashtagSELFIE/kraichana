<template>
  <nav class="main-navbar" role="navigation" aria-label="main navigation">
    <section class="home">
      <router-link to="/"><i class="fas fa-home fa-2x"></i></router-link>
    </section>
    <section class="title">
      <img
        class="img-fluid"
        style="height:36px"
        src="@/assets/logo_with_text.png"
        alt="ใครชนะ?"
      />
    </section>
    <section class="qr">
      <router-link to="/qr"><i class="fas fa-qrcode fa-2x"></i></router-link>
    </section>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style lang="scss" scoped>
.main-navbar {
  display: flex;
  align-items: center;
  height: 52px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  padding: 0 1rem;
  z-index: 999;

  > .title {
    flex: 1 1 0;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
