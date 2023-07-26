const path = require('path');
const { merge } = require('webpack-merge');
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');

const aiUtilWebpackConfig = {
    output: {
        path: path.resolve(process.cwd(), `dist`),
        library: 'DescriptionGenerator',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    externals: {
      // Use external version of React
      "react": {
          "commonjs": "react",
          "commonjs2": "react",
          "amd": "react",
          "root": "React"
      },
      "react-dom": {
          "commonjs": "react-dom",
          "commonjs2": "react-dom",
          "amd": "react-dom",
          "root": "ReactDOM"
      }
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  }
};

module.exports = merge(wpScriptsConfig, aiUtilWebpackConfig);