const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/',
          },
        compress: true,
        hot: true,
        port: 8080,
        proxy: { 
            "/api/**": { 
                target: 'http://localhost:3000', 
                secure: false 
            },
        }
     },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/client/index.html'
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
                test: /\.(sa|sc|c)ss$/i,
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
