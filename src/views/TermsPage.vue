<template>
  <section class="legal-page">
    <div class="legal-hero">
      <div class="container">
        <h1>{{ t('terms.title') }}</h1>
        <p>{{ t('terms.subtitle') }}</p>
      </div>
    </div>
    <div class="container legal-body">
      <div v-for="(sec, i) in sections" :key="i">
        <h2>{{ sec.title }}</h2>
        <p v-for="(p, j) in sec.paragraphs" :key="j">{{ p }}</p>
        <ul v-if="sec.list">
          <li v-for="(li, k) in sec.list" :key="k">{{ li }}</li>
        </ul>
      </div>
      <p class="legal-date"><em>{{ t('terms.effective') }}</em></p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
const sections = computed(() => tm('terms.sections') || [])
</script>

<style scoped>
.legal-hero { background: var(--color-primary); color: #fff; padding: 3rem 0; text-align: center; }
.legal-hero h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
.legal-hero p { font-size: 0.95rem; opacity: 0.8; }
.legal-body { max-width: 760px; padding: 3rem 2rem; margin: 0 auto; }
.legal-body h2 { font-size: 1.15rem; color: var(--color-primary); margin: 2rem 0 0.75rem; }
.legal-body h2:first-child { margin-top: 0; }
.legal-body p { font-size: 0.93rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 0.75rem; }
.legal-body ul { margin: 0.5rem 0 1rem 1.5rem; }
.legal-body li { font-size: 0.93rem; color: var(--color-text-light); line-height: 1.7; margin-bottom: 0.3rem; }
.legal-body a { color: var(--color-primary); }
.legal-date { margin-top: 2rem; color: var(--color-text-muted); }
</style>
