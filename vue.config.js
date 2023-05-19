/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/
module.exports = {
  outputDir: '../SDD-PARTNER-BACKEND/src/main/resources/static',
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8888'
      }
    }
  }
}
