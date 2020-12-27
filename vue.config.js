module.exports = {
<<<<<<< HEAD
  publicPath: './',
  // 反向代理
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
=======
  publicPath: "./",
  // 反向代理
  devServer: {
    open: true,
    host: "localhost",
    port: 80,
>>>>>>> dcbef54... feat(product_list/import_list)
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
<<<<<<< HEAD
      '/api': {
        target: 'https://vuets-api.herokuapp.com/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
=======
      "/api": {
        target: "https://vuets-api.herokuapp.com/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
>>>>>>> dcbef54... feat(product_list/import_list)
