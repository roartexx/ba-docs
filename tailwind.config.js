/** @type {import('tailwindcss').Config} */
export default {
	content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
	theme  : {
		extend: {
			colors: {
				white   : '#e2e8f0',
				grey    : '#a2acc5',
				blue    : '#38bdf8',
				darkblue: '#0b0f25'
			},
		},

		screens: {
			sm   : "640px",
			md   : "768px",
			lg   : "1024px",
			xl   : "1280px",
			"2xl": "1536px"
		},
	},
	plugins: [],
}

