<template>
  <div class="app-container">
    <!-- HEADER -->
    <header class="header">
      <div class="logo">🚲 BikeSize</div>
      <nav class="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/size">Trouver ma taille</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <!-- PAGE CONTENT -->
    <main class="main">
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <p>© 2025 BikeSize - Tous droits réservés</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #fafafa;
}

/* HEADER compact */
.header {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.logo {
  font-weight: bold;
  font-size: 1rem; /* ↓ réduit taille du texte */
  color: #2c3e50;
}

.nav a {
  margin-left: 0.8rem; /* ↓ réduit espace entre liens */
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  font-size: 0.9rem; /* ↓ texte plus petit */
}

.nav a:hover {
  color: #3498db;
}

/* MAIN CONTENT */
.main {
  flex: 1;
  padding: 2rem;
  margin: auto;
}

/* FOOTER */
.footer {
  background: white;
  border-top: 1px solid #eee;
  padding: 0.6rem; /* ↓ plus petit */
  text-align: center;
  font-size: 0.8rem;
  color: #888;
}
</style>
