import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import VersionsPage from '../views/VersionsPage.vue'
import FunctionPage from '../views/FunctionPage.vue'
import DownloadsPage from '../views/DownloadsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import TermsPage from '../views/TermsPage.vue'
import PrivacyPage from '../views/PrivacyPage.vue'

const routes = [
  { path: '/', name: 'home', component: LandingPage },
  { path: '/function', name: 'function', component: FunctionPage },
  { path: '/versions', name: 'versions', component: VersionsPage },
  { path: '/downloads', name: 'downloads', component: DownloadsPage },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/terms', name: 'terms', component: TermsPage },
  { path: '/privacy', name: 'privacy', component: PrivacyPage },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
