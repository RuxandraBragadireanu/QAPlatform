const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./client/app/index.tsx'],
    vendor: ['react', 'react-dom']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist', 'client'),
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        secure: false
      },
      '/': {
        target: 'http://localhost:3000/',
        secure: false
      }
    },
    port: 3200
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'client'),
    publicPath: '/',
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'app', 'index.html') }),
  ],
  performance: {
    hints: false
  }
};
