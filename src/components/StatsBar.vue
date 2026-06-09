<template>
  <section id="stats" class="stats">
    <div class="container">
      <div class="stats-grid">
        <div v-for="(s, i) in stats" :key="i" class="stat-item">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ stats: Array })
</script>

<style scoped>
.stats {
  padding: var(--section-padding);
  background: var(--color-primary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.93rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }
  .stat-value {
    font-size: 1.8rem;
  }
}
</style>
