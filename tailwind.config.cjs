/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm' : '640px',
				'md' : '768px',
				'lg' : '1024px',
				'xl' : '1280px',
				'2xl' : '1536px'
			},
			colors: {
				'primary': '#E5BA73',
				'primary-light': '#FAEAB1',
				'primary-dark': '#C98919',
				'accent': '#F2F2F2',
				'accent-light': '#FFFFFF',
				'accent-dark': '#C9C9C9',
				'dark': '#202023',
				'dark-light': '#3C3C3F',
				'blue-accent': '#00E7FF',
				'rose-accent': '#FF00E7'
			}
		},
	},
	plugins: [],
}
