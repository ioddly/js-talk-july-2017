module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: './build/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      }
    ],
  },
  devtool: 'source-map',
}
