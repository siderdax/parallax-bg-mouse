import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
      green: colors.green,
      t1: {
        5: '#ECEE81',
      },
      t2: {
        5: '#8DDFCB',
      },
      t3: {
        5: '#82A0D8',
      },
      t4: {
        5: '#EDB7ED',
      },
    },
  },
  plugins: [],
}
export default config
