const path = require('path');

module.exports = {
    entry: './create-bundle/vanilla.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'kado-pay-widget.js',
        library: 'KADO_PAY_WIDGET',
        libraryTarget: 'window'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "css-loader"
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            }
        ]
    },
}
