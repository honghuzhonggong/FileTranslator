<template>
  <section class="downloads-page">
    <div class="downloads-hero">
      <div class="container">
        <h1>{{ t('downloads.heroTitle') }}</h1>
        <p>{{ t('downloads.heroSubtitle') }}</p>
      </div>
    </div>

    <div class="container downloads-body">
      <div class="download-card">
        <div class="download-icon">
          <svg viewBox="0 0 88 88" width="48" height="48">
            <rect x="2" y="2" width="40" height="40" rx="3" fill="#0078D4"/>
            <rect x="46" y="2" width="40" height="40" rx="3" fill="#0078D4"/>
            <rect x="2" y="46" width="40" height="40" rx="3" fill="#0078D4"/>
            <rect x="46" y="46" width="40" height="40" rx="3" fill="#0078D4"/>
          </svg>
        </div>
        <h2>{{ t('downloads.windowsTitle') }}</h2>
        <p>{{ t('downloads.windowsDesc') }}</p>
        <ul>
          <li>{{ t('downloads.winP1') }}</li>
          <li>{{ t('downloads.winP2') }}</li>
          <li>{{ t('downloads.winP3') }}</li>
        </ul>
        <a :href="downloadUrl" target="_blank" class="btn-download">{{ t('downloads.btnText') }}</a>
      </div>

      <div class="download-card">
        <div class="download-icon">
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path d="M18.7 19.5c-.8 1.2-1.8 2.3-3.2 2.3-1.2 0-1.6-.7-3-.7s-1.9.7-3 .7c-1.3 0-2.4-1.3-3.2-2.5-1.1-1.7-2-4.7-1-7 .6-1.4 1.9-2.4 3.3-2.4 1.3 0 2.1.7 3.2.7s2.5-.9 3.5-.7c.6 0 2.3.2 3.3 1.9-.1 0-2 .8-2 3 0 2.5 2.2 3.4 2.2 3.4-.1.5-.5 1.4-1.1 2.3zM15.6 3c.1 1.1-.2 2.3-.9 3.3-.8 1-2 1.7-3.1 1.6-.1-1.1.2-2.3 1-3.3.8-1 2.1-1.7 3-1.6z" fill="var(--color-primary)"/>
          </svg>
        </div>
        <h2>{{ t('downloads.macTitle') }}</h2>
        <p>{{ t('downloads.macDesc') }}</p>
        <ul>
          <li>{{ t('downloads.macP1') }}</li>
          <li>{{ t('downloads.macP2') }}</li>
          <li>{{ t('downloads.macP3') }}</li>
        </ul>
        <a :href="downloadUrl" target="_blank" class="btn-download">{{ t('downloads.btnText') }}</a>
      </div>

      <div class="download-card">
        <div class="download-icon">
          <svg viewBox="0 0 180 160" width="48" height="48">
            <!-- large feet spread outward -->
            <ellipse cx="45" cy="145" rx="35" ry="12" fill="#F2C811"/>
            <ellipse cx="135" cy="145" rx="35" ry="12" fill="#F2C811"/>
            <!-- body -->
            <ellipse cx="90" cy="95" rx="55" ry="50" fill="#333"/>
            <!-- large white belly -->
            <ellipse cx="90" cy="105" rx="32" ry="28" fill="#fff"/>
            <!-- big head -->
            <circle cx="90" cy="52" r="38" fill="#333"/>
            <!-- large eyes -->
            <ellipse cx="78" cy="48" rx="10" ry="12" fill="#fff"/>
            <ellipse cx="102" cy="48" rx="10" ry="12" fill="#fff"/>
            <ellipse cx="80" cy="46" rx="4" ry="5" fill="#333"/>
            <ellipse cx="104" cy="46" rx="4" ry="5" fill="#333"/>
            <!-- beak -->
            <ellipse cx="90" cy="65" rx="14" ry="8" fill="#F2C811"/>
            <ellipse cx="90" cy="65" rx="10" ry="5" fill="#FF9900"/>
            <!-- small wings -->
            <ellipse cx="38" cy="90" rx="12" ry="18" fill="#333" transform="rotate(30,38,90)"/>
            <ellipse cx="142" cy="90" rx="12" ry="18" fill="#333" transform="rotate(-30,142,90)"/>
          </svg>
        </div>
        <h2>{{ t('downloads.linuxTitle') }}</h2>
        <p>{{ t('downloads.linuxDesc') }}</p>
        <ul>
          <li>{{ t('downloads.linuxP1') }}</li>
          <li>{{ t('downloads.linuxP2') }}</li>
          <li>{{ t('downloads.linuxP3') }}</li>
        </ul>
        <a :href="downloadUrl" target="_blank" class="btn-download">{{ t('downloads.btnText') }}</a>
      </div>
    </div>

    <div class="container downloads-note">
      <p>{{ t('downloads.note') }}</p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const downloadUrl = 'https://github.com/sams500/SamFileTranslator-Releases/releases'
</script>

<style scoped>
.downloads-hero {
  background: var(--color-primary);
  color: #fff;
  padding: 4rem 0;
  text-align: center;
}
.downloads-hero h1 { font-size: 2rem; margin-bottom: 0.75rem; }
.downloads-hero p { font-size: 1.05rem; opacity: 0.85; max-width: 560px; margin: 0 auto; }

.downloads-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 3rem 0 0;
}

.download-card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  transition: box-shadow 0.2s;
}
.download-card:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.download-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }

.download-card h2 {
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.download-card > p {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
  min-height: 3.2rem;
}

.download-card ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 1.25rem;
}

.download-card li {
  font-size: 0.85rem;
  color: var(--color-text-light);
  padding: 0.25rem 0;
  line-height: 1.5;
}

.download-card li::before {
  content: '✓ ';
  color: var(--color-primary);
  font-weight: 700;
}

.btn-download {
  display: inline-block;
  background: var(--color-primary);
  color: #fff;
  border-radius: 8px;
  padding: 0.7rem 1.8rem;
  font-size: 0.95rem;
  font-weight: 700;
  transition: opacity 0.2s;
}

.btn-download:hover { opacity: 0.9; }

.downloads-note {
  text-align: center;
  padding: 1.5rem 0 var(--section-padding);
}
.downloads-note p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .downloads-body {
    grid-template-columns: 1fr;
  }
}
</style>
