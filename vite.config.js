import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

// Эмуляция __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/LoftHouse',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Теперь '@' указывает на папку src
    },
  },
});