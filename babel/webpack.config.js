const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	mode: 'development',
	target: 'node', // 默认是 target: 'web', 如果需要引用node内置库则需要 target: 'node'
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|dist)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							[
								'@babel/plugin-transform-runtime',
								{
									corejs: 3,
									regenerator: true,
									useESModule: true,
									helpers: true,
								},
							],
						],
					},
				},
			},
		],
	},
};
