<template>
  <section class="function-page">
    <div class="function-hero">
      <div class="container">
        <h1>{{ t('function.heroTitle') }}</h1>
        <p>{{ t('function.heroSubtitle') }}</p>
      </div>
    </div>

    <div class="container">
      <div v-for="(feat, i) in features" :key="i" class="feature-row" :class="{ 'feature-row--reverse': i % 2 === 1 }">
        <div class="feature-image">
          <img :src="feat.img" :alt="feat.title" />
        </div>
        <div class="feature-text">
          <span class="feature-badge">{{ feat.badge }}</span>
          <h2>{{ feat.title }}</h2>
          <p>{{ feat.desc }}</p>
          <ul v-if="feat.points">
            <li v-for="pt in feat.points" :key="pt">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import excelImg from '../products/images/excel-translate.png'
import wordImg from '../products/images/word-translate.png'
import pptImg from '../products/images/pptx-translate.png'
import pdfDirectImg from '../products/images/PDF-translate-direct.png'
import pdfConvImg from '../products/images/PDF-translate-conversion.png'
import ocrImg from '../products/images/pics-OCR-translate.png'
import termImg from '../products/images/term list.png'
import miscImg from '../products/images/20260609.png'

const { t } = useI18n()

const features = computed(() => [
  {
    img: excelImg,
    badge: t('function.badgeDoc'),
    title: t('function.excelTitle'),
    desc: t('function.excelDesc'),
    points: [t('function.excelP1'), t('function.excelP2'), t('function.excelP3')],
  },
  {
    img: wordImg,
    badge: t('function.badgeDoc'),
    title: t('function.wordTitle'),
    desc: t('function.wordDesc'),
    points: [t('function.wordP1'), t('function.wordP2'), t('function.wordP3')],
  },
  {
    img: pptImg,
    badge: t('function.badgeDoc'),
    title: t('function.pptTitle'),
    desc: t('function.pptDesc'),
    points: [t('function.pptP1'), t('function.pptP2'), t('function.pptP3')],
  },
  {
    img: pdfDirectImg,
    badge: t('function.badgePdf'),
    title: t('function.pdfDirectTitle'),
    desc: t('function.pdfDirectDesc'),
    points: [t('function.pdfDirectP1'), t('function.pdfDirectP2'), t('function.pdfDirectP3')],
  },
  {
    img: pdfConvImg,
    badge: t('function.badgePdf'),
    title: t('function.pdfConvTitle'),
    desc: t('function.pdfConvDesc'),
    points: [t('function.pdfConvP1'), t('function.pdfConvP2'), t('function.pdfConvP3')],
  },
  {
    img: ocrImg,
    badge: t('function.badgeAdvanced'),
    title: t('function.ocrTitle'),
    desc: t('function.ocrDesc'),
  },
  {
    img: termImg,
    badge: t('function.badgeAdvanced'),
    title: t('function.termTitle'),
    desc: t('function.termDesc'),
  },
  {
    img: miscImg,
    badge: t('function.badgeAdvanced'),
    title: t('function.miscTitle'),
    desc: t('function.miscDesc'),
  },
])
</script>

<style scoped>
.function-hero {
  background: var(--color-primary);
  color: #fff;
  padding: 4rem 0;
  text-align: center;
}
.function-hero h1 { font-size: 2rem; margin-bottom: 0.75rem; }
.function-hero p { font-size: 1.05rem; opacity: 0.85; max-width: 520px; margin: 0 auto; }

.feature-row {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 3rem 0;
  border-bottom: 1px solid var(--color-border);
}
.feature-row:last-child { border-bottom: none; }
.feature-row--reverse { flex-direction: row-reverse; }

.feature-image {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}
.feature-image img { width: 100%; height: auto; display: block; }

.feature-text { flex: 1; }
.feature-badge {
  display: inline-block;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
}
.feature-text h2 { font-size: 1.35rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.75rem; }
.feature-text p { font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.8; margin-bottom: 0.75rem; }
.feature-text ul { list-style: none; padding: 0; }
.feature-text li { font-size: 0.9rem; color: var(--color-text-light); padding: 0.3rem 0; line-height: 1.6; }
.feature-text li::before { content: '✓ '; color: var(--color-primary); font-weight: 700; }

@media (max-width: 768px) {
  .feature-row, .feature-row--reverse { flex-direction: column; gap: 1.5rem; }
}
</style>
