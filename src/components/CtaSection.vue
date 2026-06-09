<template>
  <section class="cta">
    <div class="container cta-inner">
      <h2 class="cta-title">{{ data.title }}</h2>
      <p class="cta-text">{{ data.text }}</p>
      <a v-if="data.link" href="#" @click.prevent="go(data.link)" class="btn-primary">{{ data.btnText }}</a>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps({ data: Object })
const router = useRouter()
function go(path) {
  router.push(path).then(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
}
</script>

<style scoped>
.cta {
  padding: var(--section-padding);
  background: var(--color-bg);
}

.cta-inner {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.cta-text {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}
</style>
