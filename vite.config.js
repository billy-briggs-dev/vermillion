import { defineConfig } from 'vite';
import { resolve } from 'path';
import lit from 'vite-plugin-lit';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    lit(),
    tailwindcss()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/theme.scss";`
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vermillion',
      fileName: (format) => `vermillion.${format}.js`
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  }
});
