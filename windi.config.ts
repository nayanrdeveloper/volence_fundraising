import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: "class",
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
        'global-light-orange': "#e6b66e",
        'global-green': "#7AB82F",
        'global-yellow': "#FCAF31",
        'global-grey-dark': "#9198A6",
        'dark-border': "#0D0063",
        'dark-card': "#06061B",
      },
      boxShadow: {
        'hero-section': "0px 0px 25px -10px rgb(0 0 0 / 20%)"
      },
      backgroundImage: {
        'line-pattern': "url('/lines.png')",
        'dark-design': "url('/network.png')"
      }
    }
  },
  shortcuts: {
    'create-input' : "border-2 w-full border-[#7AB82F30] text-light-grey h-12 p-4 rounded-xl dark:(border-2 border-dark-border bg-dark-card text-global-grey-dark')",
    'btn-submit' : "",
  }
})
