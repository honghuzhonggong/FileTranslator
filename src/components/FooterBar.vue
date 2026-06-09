<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-copy">{{ data.copyright }}</p>
      <div class="footer-links">
        <a href="#" @click.prevent="go('/terms')">{{ data.terms }}</a>
        <a href="#" @click.prevent="go('/privacy')">{{ data.privacy }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps({ data: Object })
const router = useRouter()
function go(path) { router.push(path) }
</script>

<style scoped>
.footer {
  padding: 2rem;
  background: var(--color-bg-alt);
  border-top: 1px solid var(--color-border);
}

.footer-inner {
  text-align: center;
}

.footer-copy {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.footer-links {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.footer-links a {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--color-primary); }
</style>
