const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const host = process.env.HOST || 'localhost';
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {

    entry: './src/index.js',
    devServer: {
        static: resolveAppPath('src'),
        compress: true,
        hot: true,
        host,
        port: 8080,
        proxy: { "/api/**": { target: 'http://localhost:3000', secure: false }  }
     },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // Sass loader
            {
                test: /\.s(a|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  {
					loader: 'file-loader'
				  }
				]
			}
        ]
    }

}
