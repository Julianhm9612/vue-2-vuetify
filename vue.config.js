const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  }
})
