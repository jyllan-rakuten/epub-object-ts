const path = require('path');

module.exports = {
  entry: './index.ts',
  target: 'web',
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    library: 'epubObject',
    libraryTarget: 'umd',
    filename: 'epub-object.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
