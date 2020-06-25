<template>
  <div id="app">
    <app-navbar :currentPath="$route.path" />
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

html {
  scroll-behavior: smooth;
}

body {
  font-family: "IBM Plex Sans Thai", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: #444;
  letter-spacing: 0.1px;
  line-height: 1.7;
  padding-top: 52px;
}

h1,
h2,
p {
  margin: 0;
}

a {
  color: #444;
  text-decoration: none;
}

hr {
  border: none;
  border-top: 0.05rem solid #f1f3f5;
  height: 0.05rem;
  margin: 1.6rem 0 0.8rem;
  display: block;
  position: relative;
}

.img-fluid {
  display: block;
  height: auto;
  max-width: 100%;
}

// ---
// CUSTOM COMPONENTS
// ---

// Large box item
// Snipped: .list-item
.list-item {
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px;
  background-color: white;
  cursor: pointer;
  color: rgb(102, 102, 102);
  padding: 14px 16px;
  border: 1px solid rgb(238, 238, 238);
  margin-bottom: 16px;
  position: relative;

  &:hover {
    background-color: rgb(250, 255, 251);
  }
}

// Horizontal layout where one element is spanning across and one are keep small
// Snipped: .media>[any]+.body, .media>.body+[any]
// .center,.bottom is the modifier for .media
.media {
  display: flex;

  &.center {
    align-items: center;
  }

  &.bottom {
    align-items: flex-end;
  }

  > .body {
    flex: 1 1 0;
  }
}
</style>
