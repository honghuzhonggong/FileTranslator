import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.md'],
  // GitHub Pages 部署在 /FileTranslator/ 子路径下，资源路径必须带这个前缀；
  // Vercel 部署在根路径，用 '/'。靠环境变量区分，两边互不影响。
  base: process.env.GITHUB_PAGES ? '/FileTranslator/' : '/',
})
