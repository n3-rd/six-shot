import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			rotate: {
				'40': '40deg',
				'80': '80deg',
				'120': '120deg',
				'160': '160deg',
				'200': '200deg',
				'240': '240deg',
				'280': '280deg',
				'320': '320deg'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
