<template>
  <section class="versions-page">
    <div class="versions-hero">
      <div class="container">
        <h1>{{ productTitle }}</h1>
        <p>{{ productSubtitle }}</p>
      </div>
    </div>
    <div class="container">
      <ProductShow :products="productDetails" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import { productIds } from '../products/manifest.js'
import ProductShow from '../components/ProductShow.vue'

const { t, tm, locale } = useI18n()

const mdModules = import.meta.glob('../products/descriptions/**/*.md', { query: '?raw', import: 'default', eager: true })

const productTitle = computed(() => t('products.title'))
const productSubtitle = computed(() => t('products.subtitle'))

const productDetails = computed(() => {
  const lang = locale.value
  const items = tm('products.items') || []
  const nameMap = Object.fromEntries(items.map(it => [it.id, { name: it.name, tag: it.tag }]))
  return productIds.map((id) => {
    const key = `../products/descriptions/${lang}/${id}.md`
    const raw = mdModules[key]
    const html = raw ? marked.parse(raw) : '<p>No description available</p>'
    return { id, ...nameMap[id], descriptionHtml: html }
  })
})
</script>

<style scoped>
.versions-hero {
  background: var(--color-primary);
  color: #fff;
  padding: 4rem 0;
  text-align: center;
}
.versions-hero h1 { font-size: 2rem; margin-bottom: 0.75rem; }
.versions-hero p { font-size: 1.05rem; opacity: 0.85; max-width: 520px; margin: 0 auto; }
</style>
