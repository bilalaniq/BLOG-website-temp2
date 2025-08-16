import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  process.env.NODE_ENV = mode === 'production' ? 'production' : 'development';

  return {
    plugins: [react()],
    build: {
      sourcemap: true,
      // Disable minification if you still have terser issues
      minify: mode === 'production' ? 'esbuild' : false,
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'react-vendor';
              }
              if (id.includes('@chakra-ui') || id.includes('@emotion')) {
                return 'chakra-vendor';
              }
              if (id.includes('react-helmet-async') || id.includes('framer-motion') ||
                  id.includes('react-markdown') || id.includes('react-syntax-highlighter') || 
                  id.includes('rehype') || id.includes('remark') ||
                  id.includes('jwt-decode') || id.includes('react-hook-form') || 
                  id.includes('react-lazy-load-image-component')) {
                return 'utility-vendor';
              }
              return 'vendor';
            }
            
            if (id.includes('/pages/Blog')) return 'blog-pages';
            if (id.includes('/pages/')) return 'app-pages';
            if (id.includes('/sections/')) return 'app-sections';
            
            if (id.includes('/components/Blog') || id.includes('/components/Login') || 
                id.includes('/components/MakePost') || id.includes('/components/EditPost') ||
                id.includes('/components/PostEditor')) {
              return 'blog-components';
            }
          }
        }
      },
      chunkSizeWarningLimit: 1000
    },
    server: {
      port: 5173,
    },
    // Add ContentLayer plugin if needed
    // plugins: [react(), contentlayer()],
  }
});