const path = require('path');

module.exports = {
  entry: {
    home: './client/home/main.jsx',
    product: './client/product/main.jsx',
    checkout: './client/checkout/main.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'server', 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'development',
  // watch: true,
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'server','public'),
    // },
    hot: true,
    compress: true,
    port: 9000,
  },
};
