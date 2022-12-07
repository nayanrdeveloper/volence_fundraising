import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme:{
    extend: {
      colors: {
        'light-grey': "#696969",
        'global-primary': "#292023",
        'global-orange': "#F39200",
        'global-green': "#7AB82F"
      },
      boxShadow: {
        'hero-section': "0px 0px 25px -10px rgb(0 0 0 / 20%)"
      },
      backgroundImage: {
        'line-pattern': "url('/lines.png')"
      }
    }
  }
})
