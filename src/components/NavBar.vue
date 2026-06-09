<template>
  <nav class="navbar">
    <div class="navbar-inner container">
      <a href="#" @click.prevent="navigate('/', null)" class="navbar-logo">{{ nav.home }}</a>
      <ul class="navbar-links">
        <li><a href="/" @click.prevent="navigate('/', null)" :class="{ active: routePath === '/' }">{{ nav.navHome }}</a></li>
        <li><a href="/function" @click.prevent="navigate('/function', null)" :class="{ active: routePath === '/function' }">{{ nav.function }}</a></li>
        <li><a href="/versions" @click.prevent="navigate('/versions', null)" :class="{ active: routePath === '/versions' }">{{ nav.versions }}</a></li>
        <li><a href="/downloads" @click.prevent="navigate('/downloads', null)" :class="{ active: routePath === '/downloads' }">{{ nav.downloads }}</a></li>
        <li><a href="/contact" @click.prevent="navigate('/contact', null)" :class="{ active: routePath === '/contact' }">{{ nav.contact }}</a></li>
      </ul>
      <div class="navbar-lang">
        <button class="lang-btn" :class="{ active: locale === 'en' }" @click="switchLang('en')">EN</button>
        <button class="lang-btn" :class="{ active: locale === 'zh' }" @click="switchLang('zh')">中文</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()
const routePath = computed(() => router.currentRoute.value.path)

const nav = computed(() => ({
  home: t('nav.title'),
  navHome: t('nav.home'),
  versions: t('nav.versions'),
  function: t('nav.function'),
  downloads: t('nav.downloads'),
  contact: t('nav.contact'),
}))

function switchLang(lang) {
  locale.value = lang
}

function navigate(routePath, anchorId) {
  const onTarget = router.currentRoute.value.path === routePath
  if (onTarget) {
    scrollTo(anchorId)
  } else {
    router.push(routePath).then(() => {
      setTimeout(() => scrollTo(anchorId), 80)
    })
  }
}

function scrollTo(id) {
  if (id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  height: var(--nav-height);
}
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.navbar-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.5px;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
}
.navbar-links a {
  font-size: 0.95rem;
  color: var(--color-text-light);
  transition: color 0.2s;
  cursor: pointer;
}
.navbar-links a:hover { color: var(--color-primary); }
.navbar-links a.active {
  color: var(--color-primary);
  font-weight: 600;
}
.navbar-lang {
  display: flex;
  gap: 0.35rem;
}
.lang-btn {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.lang-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.lang-btn.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
@media (max-width: 768px) {
  .navbar-links { gap: 1.2rem; }
}
</style>
