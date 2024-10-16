const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const orderServiceUrl = process.env.VUE_APP_ORDER_SERVICE_URL;
const productServiceUrl = process.env.VUE_APP_PRODUCT_SERVICE_URL;
