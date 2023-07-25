const path = require('path');
const { merge } = require('webpack-merge');
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');

const aiUtilWebpackConfig = {
    output: {
        path: path.resolve(process.cwd(), `dist`),
        library: ['newfold', 'wp-module-ai', '[name]'],
        libraryTarget: 'window',
    }
};

module.exports = merge(wpScriptsConfig, aiUtilWebpackConfig);