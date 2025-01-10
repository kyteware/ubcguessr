const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-transform-runtime'],
            },
            },
        },
        {
            test: /\.css$/,
            use: [
                'style-loader', // Injects styles into the DOM
                'css-loader',   // Translates CSS into CommonJS modules
            ],

        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html', // Source HTML file
        filename: 'index.html',       // Output HTML file in dist
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], 
    },
};