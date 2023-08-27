import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteJsconfigPaths from 'vite-jsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react(), viteJsconfigPaths(), svgrPlugin()],
})  ;
