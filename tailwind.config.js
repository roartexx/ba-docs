/** @type {import('tailwindcss').Config} */
export default {
	content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
	theme  : {
		extend: {
			colors: {
				white: '#E2E8F0',
				grey: '#A2ACC5',
				blue: '#38BDF8',
				darkblue: '#0B0F25'
			},
		},

		screens: {
			mobile: { max: '1024px' },
			desktop: { min: '1024px' }
		},
	},
	plugins: [],
}

