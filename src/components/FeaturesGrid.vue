<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle || 'Features' }}</h2>
      <div class="features-grid">
        <div v-for="(item, i) in features" :key="i" class="feature-card">
          <span class="feature-icon">{{ item.icon }}</span>
          <h3 class="feature-name">{{ item.title }}</h3>
          <p class="feature-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ features: Array, sectionTitle: String })
</script>

<style scoped>
.features {
  padding: var(--section-padding);
  background: var(--color-bg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
}

.feature-card:hover {
  box-shadow: 0 4px 24px rgba(26, 54, 93, 0.08);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-size: 0.93rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
