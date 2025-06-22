/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scissors-from': 'hsl(39, 89%, 49%)',
        'scissors-to': 'hsl(40, 84%, 53%)',
        'paper-from': 'hsl(230, 89%, 62%)',
        'paper-to': 'hsl(230, 89%, 65%)',
        'rock-from': 'hsl(349, 71%, 52%)',
        'rock-to': 'hsl(349, 70%, 56%)',
        'lizard-from': 'hsl(261, 73%, 60%)',
        'lizard-to': 'hsl(261, 72%, 63%)',
        'cyan-from': 'hsl(189, 59%, 53%)',
        'cyan-to': 'hsl(189, 58%, 57%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'bg-from': 'hsl(214, 47%, 23%)',
        'bg-to': 'hsl(237, 49%, 15%)',
      },
      fontFamily: {
        'barlow': ['"Barlow Semi Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}