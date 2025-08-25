// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import SizeForm from '../components/SizeForm.vue'
import ResultsPage from '@/components/ResultsPage.vue'
import Contact from '@/components/Contact.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/size', component: SizeForm },
    { path: '/results',name:"result", component: ResultsPage},
    {path: '/contact', component: Contact}
  ]
})
