/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		fontFamily: {
			BaiJamjuree: ["Bai Jamjuree", "sans-serif"],
		},

		extend: {
			colors: {
				StrongCyan: "hsl(171, 66%, 44%)",
				LightBlue: "hsl(233, 100%, 69%)",
				DarkGrayishBlue: "hsl(210, 10%, 33%)",
				GrayishBlue: "hsl(201, 11%, 66%)",
			},
			backgroundImage: {
				"bg-mobile": "url('./images/bg-header-mobile.png')",
				"bg-desktop": "url('./images/bg-header-desktop.png')",
			},
		},
	},
	plugins: [],
};
