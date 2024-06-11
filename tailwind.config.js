/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom": "linear-gradient(to right, #cfdfdc, #eae4cc, #eae4cc)",
        
        // 'grad': 'linear-gradient(to right, var(--tw-gradient-stops))',
        // 'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        // 'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        // 'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',

        // gradientColorStops: {
        //   'primary': '#4f46e5',  // Example colors
        //   'secondary': '#d946ef',
        // },
      },
    },
  },
  plugins: [],
};
