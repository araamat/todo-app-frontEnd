export default {
    darkMode: ["class"],
    content: [
		"./index.html", 
		"./src/**/*.{js,ts,jsx,tsx}",
	],
    plugins: [require("tailwindcss-animate")],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {}
    	}
    }
};
