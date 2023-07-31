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
    }
};

module.exports = merge(wpScriptsConfig, aiUtilWebpackConfig);