//Code from @heyheyforhello

module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        // for proxy settings of webpack, refer: https://github.com/webpack/webpack-dev-server/issues/424
        proxy: {
            "/api": {
                target: "http://localhost:5000",
                secure: false,
                ws: true,
                changeOrigin: true,
            }
        }
    }
  }
