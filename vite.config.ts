import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    proxy : {
      '/offers/off_0000AJ2dvR4LuVMIf5iYk7' : 'https://api.duffel.com/air/'
    }
  }
})
