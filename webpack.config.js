const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    entry: './assets/application',
    output: {
      path: `${__dirname}/build`,
      filename: 'application.js'
    },
    module: {
      rules: [
        {test: /\.s?css$/, loader: "style-loader!css-loader!sass-loader"},
        {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets: ['es2015', 'stage-2']}},
        {test: /\.vue$/, loader: "vue-loader", options: { css: 'css-loader', 'scss': 'css-loader|sass-loader'}},
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
]
