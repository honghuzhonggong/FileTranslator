<template>
  <div class="app">
    <NavBar />
    <router-view />
    <FooterBar :data="footerData" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

const { t } = useI18n()
const footerData = computed(() => ({
  copyright: t('footer.copyright'),
  terms: t('footer.terms'),
  privacy: t('footer.privacy'),
}))
</script>
