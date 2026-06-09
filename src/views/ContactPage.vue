<template>
  <section class="contact-page">
    <div class="contact-hero">
      <div class="container">
        <h1>{{ c.heroTitle }}</h1>
        <p>{{ c.heroSubtitle }}</p>
      </div>
    </div>

    <div class="container contact-cards">
      <div class="info-card">
        <div class="info-card-icon">📧</div>
        <h3>{{ c.emailSupport }}</h3>
        <p>{{ c.emailDesc }}</p>
        <a href="mailto:support@translatech.com" class="info-link">support@translatech.com</a>
      </div>
      <div class="info-card">
        <div class="info-card-icon">💬</div>
        <h3>{{ c.socialMedia }}</h3>
        <p>{{ c.socialDesc }}</p>
        <div class="social-links">
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">GitHub</a>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card-icon">📍</div>
        <h3>{{ c.location }}</h3>
        <p>{{ c.locationDesc }}</p>
        <span class="info-meta">{{ c.locationMeta }}</span>
      </div>
    </div>

    <div class="container contact-body">
      <div class="contact-sidebar">
        <div class="sidebar-section">
          <h2>{{ c.faqTitle }}</h2>
          <div class="faq-item">
            <h4>{{ c.faq1q }}</h4>
            <p>{{ c.faq1a }}</p>
          </div>
          <div class="faq-item">
            <h4>{{ c.faq2q }}</h4>
            <p>{{ c.faq2a }}</p>
          </div>
        </div>
        <div class="sidebar-section">
          <h2>{{ c.hoursTitle }}</h2>
          <div class="office-hours">
            <p class="hours-row"><span>{{ c.hoursDays }}</span><span>{{ c.hoursTime }}</span></p>
            <p class="hours-tz">{{ c.hoursTz }}</p>
          </div>
        </div>
      </div>

      <div class="contact-form-wrap">
        <h2>{{ c.formTitle }}</h2>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label for="name">{{ c.formName }}</label>
              <input id="name" v-model="form.name" type="text" :placeholder="c.formNamePlaceholder" required />
            </div>
            <div class="form-group">
              <label for="email">{{ c.formEmail }}</label>
              <input id="email" v-model="form.email" type="email" :placeholder="c.formEmailPlaceholder" required />
            </div>
          </div>
          <div class="form-group">
            <label for="subject">{{ c.formSubject }}</label>
            <input id="subject" v-model="form.subject" type="text" :placeholder="c.formSubjectPlaceholder" />
          </div>
          <div class="form-group">
            <label for="message">{{ c.formMessage }}</label>
            <textarea id="message" v-model="form.message" rows="5" :placeholder="c.formMessagePlaceholder" required></textarea>
          </div>
          <button type="submit" class="btn-submit" :disabled="submitted">
            {{ submitted ? c.formSent : c.formSubmit }}
          </button>
        </form>
      </div>
    </div>

    <div class="container team-section">
      <h2>{{ c.teamTitle }}</h2>
      <div class="team-cards">
        <div class="team-card">
          <img :src="samImg" alt="chengbin" class="team-avatar" />
          <h3>{{ c.teamName1 }}</h3>
          <p class="team-role">{{ c.teamRole1 }}</p>
          <p class="team-bio">{{ c.teamBio1 }}</p>
        </div>
        <div class="team-card">
          <img :src="ganggangImg" alt="ganggang" class="team-avatar" />
          <h3>{{ c.teamName2 }}</h3>
          <p class="team-role">{{ c.teamRole2 }}</p>
          <p class="team-bio">{{ c.teamBio2 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import samImg from '../assets/contact/sam.jpg'
import ganggangImg from '../assets/contact/ganggang.jpg'

const { t } = useI18n()

const c = computed(() => ({
  heroTitle: t('contact.heroTitle'), heroSubtitle: t('contact.heroSubtitle'),
  emailSupport: t('contact.emailSupport'), emailDesc: t('contact.emailDesc'),
  socialMedia: t('contact.socialMedia'), socialDesc: t('contact.socialDesc'),
  location: t('contact.location'), locationDesc: t('contact.locationDesc'), locationMeta: t('contact.locationMeta'),
  faqTitle: t('contact.faqTitle'), faq1q: t('contact.faq1q'), faq1a: t('contact.faq1a'),
  faq2q: t('contact.faq2q'), faq2a: t('contact.faq2a'),
  hoursTitle: t('contact.hoursTitle'), hoursDays: t('contact.hoursDays'),
  hoursTime: t('contact.hoursTime'), hoursTz: t('contact.hoursTz'),
  formTitle: t('contact.formTitle'), formName: t('contact.formName'), formNamePlaceholder: t('contact.formNamePlaceholder'),
  formEmail: t('contact.formEmail'), formEmailPlaceholder: t('contact.formEmailPlaceholder'),
  formSubject: t('contact.formSubject'), formSubjectPlaceholder: t('contact.formSubjectPlaceholder'),
  formMessage: t('contact.formMessage'), formMessagePlaceholder: t('contact.formMessagePlaceholder'),
  formSubmit: t('contact.formSubmit'), formSent: t('contact.formSent'),
  teamTitle: t('contact.teamTitle'), teamName1: t('contact.teamName1'), teamRole1: t('contact.teamRole1'), teamBio1: t('contact.teamBio1'),
  teamName2: t('contact.teamName2'), teamRole2: t('contact.teamRole2'), teamBio2: t('contact.teamBio2'),
}))

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)
function handleSubmit() { submitted.value = true; setTimeout(() => { submitted.value = false }, 3000) }
</script>

<style scoped>
.contact-hero { background: var(--color-primary); color: #fff; padding: 4rem 0; text-align: center; }
.contact-hero h1 { font-size: 2rem; margin-bottom: 0.75rem; }
.contact-hero p { font-size: 1.05rem; opacity: 0.85; max-width: 480px; margin: 0 auto; }
.contact-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 3rem 0 0; }
.info-card { background: #fff; border: 1px solid var(--color-border); border-radius: 12px; padding: 2rem 1.5rem; text-align: center; transition: box-shadow 0.2s; }
.info-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.info-card-icon { font-size: 2rem; margin-bottom: 0.75rem; }
.info-card h3 { font-size: 1.05rem; color: var(--color-primary); margin-bottom: 0.5rem; }
.info-card > p { font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 0.75rem; line-height: 1.5; }
.info-link { color: var(--color-primary); font-size: 0.92rem; font-weight: 600; }
.info-meta { font-size: 0.85rem; color: var(--color-text-light); font-weight: 600; }
.social-links { display: flex; justify-content: center; gap: 0.75rem; }
.social-link { font-size: 0.85rem; color: var(--color-text-light); padding: 0.3rem 0.75rem; border: 1px solid var(--color-border); border-radius: 4px; transition: all 0.2s; }
.social-link:hover { color: var(--color-primary); border-color: var(--color-primary); }
.contact-body { display: flex; gap: 3rem; padding-top: 3rem; padding-bottom: 0; }
.contact-sidebar { flex: 1; }
.contact-form-wrap { flex: 1.3; }
.sidebar-section { margin-bottom: 2.5rem; }
.sidebar-section h2, .contact-form-wrap h2, .team-section h2 { font-size: 1.25rem; color: var(--color-primary); margin-bottom: 1rem; }
.faq-item { margin-bottom: 1.25rem; }
.faq-item h4 { font-size: 0.95rem; color: var(--color-text); margin-bottom: 0.35rem; }
.faq-item p { font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; }
.office-hours { background: var(--color-bg-alt); border-radius: 8px; padding: 1rem 1.25rem; }
.hours-row { display: flex; justify-content: space-between; font-size: 0.92rem; color: var(--color-text); font-weight: 600; margin-bottom: 0.35rem; }
.hours-tz { font-size: 0.82rem; color: var(--color-text-muted); }
.contact-form { background: #fff; border: 1px solid var(--color-border); border-radius: 12px; padding: 1.5rem; }
.form-row { display: flex; gap: 1rem; }
.form-group { margin-bottom: 1rem; flex: 1; }
.form-group label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.35rem; }
.form-group input, .form-group textarea { width: 100%; padding: 0.65rem 0.85rem; border: 1px solid var(--color-border); border-radius: 6px; font-size: 0.93rem; font-family: inherit; color: var(--color-text); background: var(--color-bg-alt); transition: border-color 0.2s; box-sizing: border-box; }
.form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--color-primary); }
.form-group textarea { resize: vertical; }
.btn-submit { display: inline-block; background: var(--color-primary); color: #fff; border: none; border-radius: 6px; padding: 0.75rem 2rem; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: opacity 0.2s; }
.btn-submit:hover { opacity: 0.9; }
.btn-submit:disabled { opacity: 0.6; cursor: default; }
.team-section { padding-bottom: var(--section-padding); padding-top: 3rem; }
.team-cards { display: flex; gap: 2rem; }
.team-card { flex: 1; text-align: center; padding: 2rem; background: #fff; border: 1px solid var(--color-border); border-radius: 12px; }
.team-avatar { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 3px solid var(--color-bg-alt); }
.team-card h3 { font-size: 1.1rem; color: var(--color-text); margin-bottom: 0.25rem; }
.team-role { font-size: 0.85rem; color: var(--color-primary); font-weight: 600; margin-bottom: 0.75rem; }
.team-bio { font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6; }
@media (max-width: 768px) { .contact-cards { grid-template-columns: 1fr; } .contact-body { flex-direction: column; gap: 2rem; } .team-cards { flex-direction: column; } .form-row { flex-direction: column; } }
</style>
