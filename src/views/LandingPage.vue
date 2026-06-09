<template>
  <div>
    <HeroSection :data="heroData" />
    <FeaturesGrid :features="featureItems" :sectionTitle="featureTitle" />
    <StatsBar :stats="statItems" />
    <CtaSection :data="ctaData" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '../components/HeroSection.vue'
import FeaturesGrid from '../components/FeaturesGrid.vue'
import StatsBar from '../components/StatsBar.vue'
import CtaSection from '../components/CtaSection.vue'

const { t, tm } = useI18n()

const heroData = computed(() => ({
  title: t('hero.title'),
  subtitle: t('hero.subtitle'),
  ctaText: t('hero.cta'),
  ctaLink: '/downloads',
}))

const ctaData = computed(() => ({
  title: t('cta.title'),
  text: t('cta.text'),
  btnText: t('cta.btn'),
  link: '/function',
}))

const featureTitle = computed(() => t('features.title'))
const featureItems = computed(() => tm('features.items') || [])
const statItems = computed(() => tm('stats.items') || [])
</script>
