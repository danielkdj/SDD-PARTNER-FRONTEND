module.exports = {
  outputDir: '../SDD-PARTNER-BACKEND/src/main/resources/static',
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        ws: true
      }
    }
  }
}
