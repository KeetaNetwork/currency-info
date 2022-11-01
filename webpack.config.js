const path = require('path');
const { writeTypes } = require('./src/generator/generate_types');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.svg/,
                use: {
                    loader: "svg-url-loader",
                    options: {
                        iesafe: true,
                        encoding: "base64",
                    },
                }
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
        // publicPath: 'dist',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'commonjs2'
        },
    },
    plugins: [
        // Plugin to generate types.generated.ts before compile
        {
            apply: (compiler) => {
                compiler.hooks.compile.tap('generate_types', () => {
                    writeTypes();
                });
            },
        },
    ]
};
  