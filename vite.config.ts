import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: fileURLToPath(new URL('src/main.ts', import.meta.url)),
      name: 'KnackVibeApp', // The global variable name when included via script tag (UMD format)
      formats: ['umd'], // Output UMD format suitable for script tags
      fileName: (format) => `knack-vibe-coding-library.js`, // Output filename
    },
    // Optional: Configure rollup options further if needed
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['vue'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
    // Ensure the output directory is 'dist' (default)
    // outDir: 'dist',
    // Disable minification for the watch build if desired (makes debugging easier)
    // watch: {
    //   buildDelay: 500, // Optional delay
    // },
    // Consider setting minify: false during watch if needed, but the default build command will minify.
  },
});