const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundled file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
//   devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,  // Transpile JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',  // Uses Babel to transpile JavaScript
      },
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader'],  // Inject CSS into the DOM
      },
    ],
  },
  devServer: {
    liveReload: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),  // Serve files from the dist directory
    },
  },
};
