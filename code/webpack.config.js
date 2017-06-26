module.exports = {
  entry: './src/index.js',

  output: {
    filename: './build/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      }
    ],
  },
  devtool: 'source-map',
}
