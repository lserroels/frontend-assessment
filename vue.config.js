const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://s3.us-west-2.amazonaws.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/cdn.number8.com/LA',
        },
      },
    },
  },
})
