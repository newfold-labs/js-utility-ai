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
    resolve: {
      extensions: ['.js'],
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
  }
};

module.exports = merge(wpScriptsConfig, aiUtilWebpackConfig);