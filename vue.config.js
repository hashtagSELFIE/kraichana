module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  },
  pwa: {
    name: "ใครชนะ?",
    themeColor: "#ffffff",
    msTileColor: "#2d89ef",
    iconPaths: {
      favicon32: "favicon-32x32.png",
      favicon16: "favicon-16x16.png",
      appleTouchIcon: "apple-touch-icon.png",
      maskIcon: "safari-pinned-tab.svg",
      msTileImage: "mstile-150x150.png"
    },
    manifestOptions: {
      background_color: "#ffffff"
    }
  }
};
