module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/kraichana" : "/",
  publicPath: "/kraichana",
  outputDir: "docs",
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  }
};
