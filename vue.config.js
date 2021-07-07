const webpack = require('webpack'); // eslint-disable-line

module.exports = {
  configureWebpack: {

    resolve: {
//      extensions: ['.js', '.vue', '.json'],
      alias: {
        'jquery-resizable': 'jquery-resizable-dom/src/jquery-resizable.js',
      }
    },
    module: {
      rules: [{
        test: /\.md$/,
        loader: 'raw-loader'
      }]
    },
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default'],
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ]
  },
  publicPath: '',
};
