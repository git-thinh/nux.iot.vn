const fs = require('fs');
const path = require('path');
const axios = require('axios');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');
const postcssNested = require('postcss-nested');
const postcssCalc = require('postcss-calc');
const _ = require('lodash');

//-----------------------------------------------------------------

const cf = {
	ip: '127.0.0.1',
	port: 12345,
	ssr: 1,
	runtime: 0,

	theme: 'news188',

	domain: 'nhakhoa188.iot.vn',
	lang: 'en',
}

console.log(`>>>>> [ SSR = ${cf.ssr} | RUNTIME = ${cf.runtime} |` +
	` DOMAIN = ${cf.domain} | LANG = ${cf.lang} | HOST = ${cf.ip}:${cf.port} ]`);

module.exports = {
	vue: {
		config: {
			silent: cf.runtime === 1
		}
	},
	publicRuntimeConfig: {
		config: cf
	},

	privateRuntimeConfig: {},

	target: 'static', //spa static
	ssr: cf.ssr === 1,
	telemetry: true,

	alias: {
		//'^runtime': __pathRuntime,
	},

	components: [
		`~/site/${cf.theme}`,
		//__pathRuntime
	],

	head: {
		title: 'Title Config',
		meta: [{
				'http-equiv': 'Content-Type',
				content: 'text/html; charset=UTF-8'
			},
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			}
		],
		//link: cf.links,
		//script: cf.scripts
	},
	buildModules: [
		'@nuxt/typescript-build'
	],

	css: [],

	build: {
		html: {
			minify: false,
		},

		indicator: false,
		extractCSS: true,
		optimizeCSS: true,

		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.(css|vue)$/,
						chunks: 'all',
						enforce: true
					},
				}
			}
		},

		filenames: {
			app: 'modern.js',
			chunk: 'js/[name].js',
			font: 'fonts/[name].[ext]',
			img: '[path][name].[ext]'
		},

		postcss: {
			plugins: [
				postcssImport(),
				postcssPresetEnv({
					stage: 2,
					preserve: process.env.NODE_ENV !== 'production',
					importFrom: [],
					autoprefixer: {
						grid: true
					},
					features: {
						'color-mod-function': {
							unresolved: 'warn'
						},
						'custom-media-queries': {}
					},
					browsers: ['>= 5% in DK', 'ie 11']
				}),
				postcssNested(),
				postcssCalc(),
				postcssReporter({
					clearReportedMessages: true
				})
			]
		},
		extend(config, {
			isDev,
			isClient
		}) {
			if (isDev && isClient) {}
		},
		extend(config, ctx) {
			if (ctx.isDev) {
				config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
			}
		}
	},

	modules: ['@nuxtjs/axios', '@nuxtjs/svg-sprite', '@nuxtjs/sitemap', '@nuxtjs/netlify-files'],
	//plugins: ['~/plugins/axios', '~/plugins/apis', '~/plugins/utils', '~/plugins/app-mixins'],
	plugins: [],

	router: {
		prefetchLinks: false,
		trailingSlash: true,
		extendRoutes(routes, resolve) {
			routes.splice(0, routes.length);
			routes.push({
				name: 'content',
				path: '*',
				component: resolve(__dirname, 'pages/index.vue')
			});
		}
	},

	sitemap: {
		hostname: 'http://' + cf.domain,
		trailingSlash: true,
		cacheTime: process.env.NODE_ENV === 'production' ? 86400000 : 0,
		exclude: ['**/_icons'],
		routes: async () => {
			return ['/'];
		}
	},

	generate: {
		dir: './dist/' + cf.domain,
		fallback: "404.html",
		crawler: false,
		interval: 100,
		concurrency: 1500, //def=500
		routes: async () => {
			return ['/'];
		}
	},

	server: {
		timing: false,
		host: cf.ip,
		port: cf.port,
	},

	render: {
		http2: {
			push: true
		}
	},

	serverMiddleware: []
};
