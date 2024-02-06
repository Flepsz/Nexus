/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F4F4F4",
				secondary: "#5A00CD",
			},
		},
	},
	plugins: [],
};
