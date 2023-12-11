const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.svg/,
                type: "asset/inline"
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.svg'],
        modules: ['src', path.join(__dirname, '../node_modules')]
    },
    output: {
        publicPath: '',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'commonjs2'
        },
    }
};
  