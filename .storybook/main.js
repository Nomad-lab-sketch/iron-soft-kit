module.exports = {
	"stories": [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	webpackFinal: config => {
		// remove svg from existing rule
		const fileLoaderRule = config.module.rules.find(
			(rule) => rule.test && rule.test.test('.svg')
		)
		fileLoaderRule.exclude = /\.svg$/

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader'],
		})

		return config
	},
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: `@storybook/preset-scss`,
			options: {
				rule: {
					test: /\.module\.s[ca]ss$/,
				},
				cssLoaderOptions: {
					modules: {
						localIdentName: '[name]__[local]--[hash:base64:5]',
					},
				}
			},
		},
	],
	"framework": "@storybook/react",
	"core": {
		"builder": "@storybook/builder-webpack5"
	},

}