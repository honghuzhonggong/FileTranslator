<template>
  <section class="hero">
    <div class="hero-inner container">
      <h1 class="hero-title">{{ data.title }}</h1>
      <p class="hero-subtitle">{{ data.subtitle }}</p>
      <a href="#" @click.prevent="go(data.ctaLink)" class="btn-primary hero-cta">{{ data.ctaText }}</a>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps({ data: Object })
const router = useRouter()
function go(path) { router.push(path) }
</script>

<style scoped>
.hero {
  padding: 6rem 2rem 5rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  text-align: center;
}

.hero-inner {
  max-width: 720px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem 3rem;
  }
  .hero-title {
    font-size: 2rem;
  }
}
</style>
