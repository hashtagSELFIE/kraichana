module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  }
};
