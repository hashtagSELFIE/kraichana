<template>
  <div id="app">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("IBM Plex Sans Thai"), local("IBMPlexSansThai-Regular"),
    url("assets/fonts/IBMPlexSansThai-Regular.woff2") format("woff2"),
    url("assets/fonts/IBMPlexSansThai-Regular.woff") format("woff");
}

@font-face {
  font-family: "IBM Plex Sans Thai";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("IBM Plex Sans Thai Bold"), local("IBMPlexSansThai-Bold"),
    url("assets/fonts/IBMPlexSansThai-Bold.woff2") format("woff2"),
    url("assets/fonts/IBMPlexSansThai-Bold.woff") format("woff");
}

body {
  font-family: "IBM Plex Sans Thai", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  padding-top: 52px;
  color: #444;
  letter-spacing: 0.1px;
  line-height: 1.7;
}

.img-fluid {
  display: block;
  height: auto;
  max-width: 100%;
}
</style>
