/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		thems: ["light", "dark", "cupcake"]
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
