<template>
  <div class="landing">
    <!-- Section Hero avec image -->
    <section class="hero-section">
      <div class="hero-image">
        <img src="../assets/bikel.png" alt="Cycliste en action" />
        <div class="hero-overlay"></div>
      </div>
      
      <!-- Bouton à cheval -->
      <div class="cta-container">
        <router-link to="/size" class="btn-hero">
          C'est parti ! 🚴‍♂️
        </router-link>
      </div>
      
      <!-- Bande anthracite -->
      <div class="white-band">
        <h1>Trouvez la taille parfaite de votre vélo</h1>
      </div>
    </section>

    <!-- Section explicative -->
    <section class="explanation-section">
      <div class="container">
        <div class="intro-text">
          <h2>Pourquoi BikeSize ?</h2>
          <p>
            Choisir la bonne taille de vélo est essentiel pour votre confort, vos performances et votre sécurité. 
            Notre outil vous aide à trouver la taille idéale en quelques clics, basé sur vos mensurations et 
            les recommandations officielles des marques.
          </p>
        </div>

        <div class="features">
          <div class="feature-card" v-for="(feat, index) in features" :key="index">
            <div class="feature-icon">{{ feat.icon }}</div>
            <h3>{{ feat.title }}</h3>
            <p>{{ feat.text }}</p>
          </div>
        </div>

        <div class="secondary-cta">
          <router-link to="/contact" class="btn-secondary">
            Une question ? Contactez-nous
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      features: [
        { 
          icon: "📏", 
          title: "Mesures précises", 
          text: "Entrez votre taille et entrejambe pour un calcul personnalisé selon votre morphologie." 
        },
        { 
          icon: "🏷️", 
          title: "Données officielles", 
          text: "Recommandations basées sur les guides de taillage des plus grandes marques de vélo." 
        },
        { 
          icon: "⚡", 
          title: "Résultat instantané", 
          text: "Obtenez votre taille idéale en quelques secondes avec notre algorithme optimisé." 
        },
      ],
    };
  },
};
</script>

<style scoped>
.landing {
  width: 100%;
  overflow-x: hidden;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
}

.hero-image {
  position: relative;
  height: 90%;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(31, 41, 55, 0.5) 0%,
    rgba(59, 130, 246, 0.3) 100%
  );
}

/* Bande anthracite */
.white-band {
  height: 10%;
  background: #1f2937; /* gris anthracite */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
}

.white-band h1 {
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
}

/* Bouton hero */
.cta-container {
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid white;
}

.btn-hero:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(37, 99, 235, 0.5);
  background: linear-gradient(135deg, #1e40af 0%, #172554 100%);
}

.btn-hero:active {
  transform: translateY(-1px);
}

/* SECTION EXPLICATIVE */
.explanation-section {
  padding: 4rem 0;
  background: linear-gradient(180deg, white 0%, #f3f4f6 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.intro-text {
  text-align: center;
  margin-bottom: 3rem;
}

.intro-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.intro-text p {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* FEATURES */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
  font-size: 1rem;
}

/* CTA SECONDAIRE */
.secondary-cta {
  text-align: center;
}

.btn-secondary {
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid #2563eb;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-section {
    height: 80vh;
    min-height: 500px;
  }
  
  .btn-hero {
    padding: 0.875rem 2rem;
    font-size: 1.125rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .intro-text h2 {
    font-size: 2rem;
  }
  
  .features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 70vh;
    min-height: 400px;
  }
  
  .btn-hero {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
