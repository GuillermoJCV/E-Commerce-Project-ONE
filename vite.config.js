import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  test : {
    environment : "happy-dom"
  },
  plugins: [react()],
})
