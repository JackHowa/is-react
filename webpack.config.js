module.exports = {
  target: ['web', 'es2017'],
  entry: './index.js',
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
              presets: ["@babel/preset-env", "@babel/react"]
          }
      }
    ]
  },
};