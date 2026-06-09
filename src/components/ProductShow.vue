<template>
  <section id="products" class="products">
    <div class="container">
      <h2 v-if="sectionTitle" class="section-title">{{ sectionTitle }}</h2>
      <p v-if="sectionSubtitle" class="section-subtitle">{{ sectionSubtitle }}</p>

      <div
        v-for="(prod, i) in products"
        :key="prod.id"
        class="product-row"
        :class="{ 'product-row--reverse': i % 2 === 1 }"
      >
        <div class="product-image">
          <img :src="getImage(prod.id)" :alt="prod.name" />
        </div>
        <div class="product-info">
          <span class="product-tag">{{ prod.tag }}</span>
          <h3 class="product-name">{{ prod.name }}</h3>
          <div class="product-desc" v-html="prod.descriptionHtml" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const imagesGlob = import.meta.glob('../products/images/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })

defineProps({ products: Array, sectionTitle: String, sectionSubtitle: String })

function getImage(id) {
  const found = Object.keys(imagesGlob).find(k => k.includes(`/${id}.`))
  return found ? imagesGlob[found] : ''
}
</script>

<style scoped>
.products {
  padding: var(--section-padding);
  background: var(--color-bg-alt);
}

.product-row {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 4rem;
}

.product-row:last-child {
  margin-bottom: 0;
}

.product-row--reverse {
  flex-direction: row-reverse;
}

.product-image {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-info {
  flex: 1;
}

.product-tag {
  display: inline-block;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.product-desc :deep(h2) {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin: 1rem 0 0.5rem;
}

.product-desc :deep(p) {
  font-size: 0.93rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.product-desc :deep(ul) {
  list-style: none;
  padding: 0;
}

.product-desc :deep(li) {
  font-size: 0.93rem;
  color: var(--color-text-muted);
  padding: 0.25rem 0;
  line-height: 1.7;
}

.product-desc :deep(li::before) {
  content: '— ';
  color: var(--color-accent);
}

.product-desc :deep(strong) {
  color: var(--color-text);
}

@media (max-width: 768px) {
  .product-row,
  .product-row--reverse {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
