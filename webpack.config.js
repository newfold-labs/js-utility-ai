const path = require('path');
const { merge } = require('webpack-merge');
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');

const aiUtilWebpackConfig = {
    output: {
        path: path.resolve(process.cwd(), `dist`),
        library: 'DescriptionGenerator',
        libraryTarget: 'window',
    },
    resolve: {
      alias: {
        react: path.resolve('./node_modules/react'),
      },
    }
};

module.exports = merge(wpScriptsConfig, aiUtilWebpackConfig);