<template>
  <nav class="main-navbar" role="navigation" aria-label="main navigation">
    <section class="home">
      <router-link to="/"><i class="fas fa-home fa-2x"></i></router-link>
    </section>
    <section class="title">
      <!-- will change to picture version -->
      <img
        class="img-fluid"
        style="height:36px"
        src="@/assets/logo.png"
        alt="ใครชนะ?"
      />
      <div style="padding-top:8px;padding-left:8px">
        ใครชนะ?
      </div>
    </section>
    <section class="qr">
      <router-link to="/about"><i class="fas fa-qrcode fa-2x"></i></router-link>
    </section>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar"
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

  > .title {
    flex: 1 1 0;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .home,
  > .qr {
    > a {
      width: 36px;
      height: 36px;
      color: #444;
      text-decoration: none;
      position: relative;
      bottom: -3px;
    }
  }
}
</style>
