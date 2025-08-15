<template>
  <section class="landing">
    <h1>Bienvenue sur BikeSize</h1>
    <p>
      Trouvez facilement la taille idéale de votre vélo en fonction de vos mensurations et des recommandations des marques.
    </p>

    <div class="cta-buttons">
      <router-link to="/size" class="btn-primary">Trouver ma taille</router-link>
      <router-link to="/contact" class="btn-secondary">Nous contacter</router-link>
    </div>

    <div class="features">
      <div class="feature-card" v-for="(feat, index) in features" :key="index">
        <div class="icon">{{ feat.icon }}</div>
        <h3>{{ feat.title }}</h3>
        <p>{{ feat.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      features: [
        { icon: "📏", title: "Mesurez facilement", text: "Entrez vos mensurations pour obtenir la taille parfaite." },
        { icon: "🏷️", title: "Marques officielles", text: "Données précises issues des guides des fabricants." },
        { icon: "⚡", title: "Rapide et simple", text: "Un calcul instantané et une interface intuitive." },
      ],
    };
  },
};
</script>

<style scoped>
.landing {
  text-align: center;
  padding: 3rem 1rem;
}

.landing h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.landing p {
  color: #555;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.cta-buttons {
  margin-bottom: 3rem;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: 500;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: white;
  color: #3498db;
  border: 1px solid #3498db;
}

.btn-secondary:hover {
  background: #ecf6fc;
}

.features {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.feature-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
</style>
