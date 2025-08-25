<script setup> 
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getRecommendedSizes } from '../services/supabase'

const route = useRoute()
const marques = ref([])
const isLoading = ref(true)
const tailleCycliste = ref(0)
let phraseDynamique = ref('')

onMounted(async () => {
  tailleCycliste.value = parseInt(route.query.taille) || 180
  const entrejambe = route.query.entrejambe ? parseInt(route.query.entrejambe) : null
  const useEntrejambe = route.query.useEntrejambe === 'true'

  try {
    marques.value = await getRecommendedSizes(tailleCycliste.value)
    phraseDynamique.value = `Résultats pour un cycliste de ${tailleCycliste.value} cm`
  } catch (error) {
    console.error('Erreur lors du chargement:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="page">
    <div class="container">
      <!-- En-tête minimaliste -->
      <header class="header">
        <h1 class="title">Tailles recommandées</h1>
        <p class="subtitle">{{ phraseDynamique }}</p>
        <p class="note">Il s'agit de la taille du cadre. Vous pouvez ajuster d'autres éléments du vélo (potence, manivelles, selle…) pour adapter la position.</p>
      </header>

      <!-- Loader épuré -->
      <div v-if="isLoading" class="loading">
        <div class="spinner"></div>
      </div>

      <!-- Grille des recommandations -->
      <div v-else-if="marques.length > 0" class="recommendations">
        <div 
          v-for="(brand, index) in marques" 
          :key="brand.id" 
          class="brand-card"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <div class="brand-logo">
            <img :src="brand.logo_url" :alt="brand.nom || 'Logo marque'" />
          </div>
          
          <div class="brand-info">
            <h3 class="brand-name">{{ brand.nom || 'Marque' }}</h3>
            <div class="size">
              <span class="size-number">{{ brand.taille_recommandee }}</span>
              <span v-if="!isNaN(brand.taille_recommandee)" class="size-unit">cm</span>
            </div>
          </div>
        </div>
      </div>

      <!-- État vide -->
      <div v-else class="empty">
        <p>Aucune recommandation disponible</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background: #fafafa;
  font-family: 'Inter', 'Poppins', system-ui, sans-serif;
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* En-tête épuré */
.header {
  text-align: center;
  margin-bottom: 2rem;
  flex-shrink: 0;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  letter-spacing: -0.03em;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
}

.note {
  font-size: 0.95rem;
  color: #4b5563;
  font-weight: 400;
  margin: 0;
}

/* Loader minimaliste */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.spinner {
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #333;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(20); opacity: 0.3; }
}

/* Grille des recommandations : 3 cartes par ligne */
.recommendations {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  flex: 1;
  align-content: center;
  min-height: 70vh;
}

/* Cartes épurées et compactes */
.brand-card {
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  border: 3px solid #e0e7ff;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
  animation-delay: var(--delay);
  overflow: hidden;
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

.brand-card:hover {
  border-color: #2563eb;
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.15);
}

.brand-card::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(45deg, #2563eb, #3b82f6, #60a5fa);
  border-radius: 18px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.brand-card:hover::before {
  opacity: 0.1;
}

/* Logo réduit */
.brand-logo {
  margin-bottom: 1.5rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-logo img {
  max-width: 120px;
  max-height: 70px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: all 0.4s ease;
  filter: brightness(0.85) contrast(1.1);
}

.brand-card:hover .brand-logo img {
  filter: brightness(1) contrast(1.2);
  transform: scale(1.05);
}

/* Informations de la marque */
.brand-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.brand-card:hover .brand-name {
  color: #2563eb;
}

/* Taille */
.size {
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #f8fafc, #e0e7ff);
  border-radius: 16px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  color: #1e40af;
  font-size: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.size::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
  transition: left 0.6s ease;
}

.brand-card:hover .size::before {
  left: 100%;
}

.brand-card:hover .size {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-color: #3b82f6;
  transform: scale(1.02);
}

.size-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e40af;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;
}

.brand-card:hover .size-number {
  color: #1d4ed8;
  transform: scale(1.05);
}

.size-unit {
  font-size: 1.2rem;
  color: #6b7280;
  font-weight: 600;
  transition: color 0.3s ease;
}

.brand-card:hover .size-unit {
  color: #4b5563;
}

/* État vide */
.empty {
  text-align: center;
  color: #999;
  font-size: 1.1rem;
  padding: 4rem 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .recommendations { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .recommendations { grid-template-columns: 1fr; gap: 2rem; min-height: 60vh; }
  .brand-card { padding: 1.5rem 1rem; }
  .brand-logo { height: 60px; margin-bottom: 1rem; }
  .brand-logo img { max-width: 100px; max-height: 60px; }
  .size-number { font-size: 2rem; }
  .size { padding: 0.6rem 1.2rem; }
}

@media (max-width: 480px) {
  .brand-card { padding: 1rem 0.8rem; }
  .brand-logo { height: 50px; margin-bottom: 0.8rem; }
  .brand-logo img { max-width: 80px; max-height: 50px; }
  .size-number { font-size: 1.8rem; }
  .size { padding: 0.5rem 1rem; }
  .recommendations { grid-template-columns: minmax(280px, 1fr); }
}
</style>
